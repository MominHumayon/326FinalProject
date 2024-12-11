const puppeteer = require('puppeteer');
// import {setTimeout} from "node:timers/promises";
const { promisify } = require('util');
const { UCardTransaction } = require('./database');
const setTimeoutPromise = promisify(setTimeout);




async function help(){
    const browser = await puppeteer.launch({ 
        headless: false, // Make the browser visible
        defaultViewport: null // Use full-sized browser window
    });
    const page = await browser.newPage();

    await page.goto('https://get.cbord.com/umass/full/prelogin.php');
    //  const b = (await page.$$("//*[text()='Click here to login']"))[0];
    const login = await page.evaluateHandle(() =>
        Array.from(document.querySelectorAll("a")).find(
            el => el.textContent.trim() === "Click here to login"
        )
    );
    if (login) {
        await login.click(); // Click the login link
        console.log("Login button clicked.");
    } else {
        console.error("Login link not found.");
        await browser.close();
        return;
    }

    // Wait for navigation
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    // Preform Microsoft Login, semi manual. Automatic = email and password fill, Manual = password page navigation and 2FA
    try {
        const userEmail = 'adithyaanand@umass.edu';
        const userPassword = 'Katytexas!7';

        // Step 1: Enter email
        await page.waitForSelector('input[type="email"]', { timeout: 10000 });
        await page.type('input[type="email"]', userEmail);
        await page.click('input[type="submit"]');
        page.waitForNavigation({ waitUntil: 'networkidle2' });
        console.log("Email submitted.");


        // Step 2: Wait for password input, issue is I cant find out how to click the submit button on the password page. So after this manual control from user. 
        await page.waitForSelector('input[type="password"]', { timeout: 10000 });
        await page.type('input[type="password"]', userPassword);
        await page.click('input[type="submit"]');
        page.waitForNavigation({ waitUntil: 'networkidle2' });
        console.log("Password submitted and sign-in button clicked.");


        // console.log("Password submitted.");
        // // Optional: Keep the browser open for debugging
        // await setTimeoutPromise(5000);

        // // Step 3: Wait for post-login navigation
        // // await page.waitForNavigation({ waitUntil: 'networkidle2' });
        // console.log("Login successful. Current URL:", await page.url());


        // Navigate to Microsoft login
        // console.log("Navigated to Microsoft login page.");
        console.log("Please complete the login manually.");

        // Allow the user to complete the login manually
        const targetUrl = 'https://get.cbord.com/umass/full/funds_home.php';
        let currentUrl = '';
    
        // While loop to wait until the URL matches the target URL
        while (currentUrl !== targetUrl) {
            currentUrl = await page.url();
            await setTimeoutPromise(1000); // Delay 1s to avoid rapid checking
        }

        console.log("Login process completed.");

        // Scrape the UCard Swipes and UCard debit balance
        const data = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('td.last-child.balance'))
                .map(element => element.textContent.trim());
        });
    
        console.log('Scraped Data:', data);

        const [swipes, debit] = data;

        await UCardTransaction.upsert({
            userEmail,
            swipes: parseInt(swipes, 10), // Convert swipes to an integer
            debit,                // Include debitBalance
        });

        console.log('Data successfully upserted for user:', userEmail);

        // for (const balance of data){
        //     const balanceType = /^\$\d+(\.\d{2})?$/.test(balance) ? 'Debit' : 'Swipe';
        //     await UCardTransaction.create({
        //         balanceType,
        //         amount: balance,
        //     });
        // }
        // console.log('Data successfully written to the database.');


        // Scrape the history of UCard Swipes and UCard balance changes over the past 7 days. (Not implmented, will add if I have the time. Ended up being harder than expected)
        // await page.goto('https://get.cbord.com/umass/full/history.php', {
        //     waitUntil: 'networkidle2' // Ensure the page is fully loaded
        // });
        // console.log("Navigated to the transaction history page.");

        // // Wait for the historyTable div to load
        // await page.waitForSelector('#historyTable', { timeout: 15000 });
        // console.log("historyTable is loaded.");
        
        // const populateLast7Days = () => {
        //     const today = new Date();
        //     const daysObject = {};
        
        //     const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Format: "December 10, 2024"
        //     const formatter = new Intl.DateTimeFormat('en-US', options);
        
        //     for (let i = 0; i < 7; i++) {
        //         const date = new Date(today); // Create a copy of the current date
        //         date.setDate(today.getDate() - i); // Subtract days
        //         const formattedDate = formatter.format(date); // Format to "Month Day, Year"
        //         daysObject[formattedDate] = null; // Initialize value (can be updated later)
        //     }
        
        //     return daysObject;
        // };
        
        // const last7Days = populateLast7Days();
        // console.log(last7Days);

        


    } catch (error) {
        console.error("Error during Microsoft login:", error);
    }


    // Once you get to this url 'https://get.cbord.com/umass/full/funds_home.php' you are done with the login process. 
    await browser.close();
}
help();