const puppeteer = require('puppeteer');
// import {setTimeout} from "node:timers/promises";
const { promisify } = require('util');
const setTimeoutPromise = promisify(setTimeout);




async function help(){
    const browser = await puppeteer.launch({ 
        headless: false, // Make the browser visible
        defaultViewport: null // Use full-sized browser window
    });
    const page = await browser.newPage();

    await page.goto('https://get.cbord.com/umass/full/prelogin.php');
    //  const b = (await page.$$("//*[text()='Click here to login']"))[0];
    const b = await page.evaluateHandle(() =>
        Array.from(document.querySelectorAll("a")).find(
            el => el.textContent.trim() === "Click here to login"
        )
    );
    if (b) {
        await b.click(); // Click the login link
        console.log("Login button clicked.");
    } else {
        console.error("Login link not found.");
        await browser.close();
        return;
    }

    // Wait for navigation
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    // Preform Microsoft Login
    try {
        // Step 1: Enter email
        await page.waitForSelector('input[type="email"]', { timeout: 10000 });
        await page.type('input[type="email"]', 'adithyaanand@umass.edu');
        await page.click('input[type="submit"]');
        page.waitForNavigation({ waitUntil: 'networkidle2' });
        console.log("Email submitted.");


        // Step 2: Wait for password input
        await page.waitForSelector('input[type="password"]', { timeout: 10000 });
        await page.type('input[type="password"]', 'Katytexas!7');
        await page.click('input#idSIButton9[value="Next"]');
        page.waitForNavigation({ waitUntil: 'networkidle2' });
        console.log("Password submitted and sign-in button clicked.");


        console.log("Password submitted.");
        // Optional: Keep the browser open for debugging
        await setTimeoutPromise(5000);

        // Step 3: Wait for post-login navigation
        // await page.waitForNavigation({ waitUntil: 'networkidle2' });
        console.log("Login successful. Current URL:", await page.url());
    } catch (error) {
        console.error("Error during Microsoft login:", error);
    }

    await browser.close();
}
help();