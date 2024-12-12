import {JSDOM} from "jsdom";
import Meal from "../frontend/AddMeal.js";
import puppeteer from 'puppeteer';


function convertDate(date) {
  const today = new Date(date);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedDate = mm + '/' + dd + '/' + yyyy;

    return formattedDate;
}

async function scrapeMeals(url,date,time) {


    let elem;
    // Fetch the HTML content
    if (date !== convertDate(Date.now())) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(url);

        const param = "#" + time + "_menu";
        await page.select('#upcoming-foodpro',date); 
        await new Promise(resolve => setTimeout(resolve,1000));

        const content = await page.evaluate(() => document.querySelector(".panel-container").innerHTML);
        const parser = new JSDOM(content);
        const doc = parser.window.document
        elem = doc.getElementById(time+"_menu");
        await page.close();
    }

    else {
      const response = await fetch(url);
      const html = await response.text();

    // Parse the HTML content
      const parser = new JSDOM(html);
      const body = parser.window.document;
      elem = body.getElementById(time + "_menu");
    }

    
    const meals = elem.querySelectorAll(".lightbox-nutrition");
    const mealArr = [];
    let obj = {};
    
    for (let i = 0; i < meals.length; i++) {
      obj = new Meal(meals[i].querySelector("a").textContent);
      const currentMeal = meals[i].querySelector("a");
      obj.addNutInfo({
        "servingSize": currentMeal.getAttribute("data-serving-size"),
        "cals" :parseInt(currentMeal.getAttribute("data-calories")),
        "fat": currentMeal.getAttribute("data-total-fat"),
        "chol":currentMeal.getAttribute("data-cholesterol"),
        "sodium":currentMeal.getAttribute("data-sodium"),
        "carbs":currentMeal.getAttribute("data-total-carb"),
        "sugar":currentMeal.getAttribute("data-sugars"),
        "prot":currentMeal.getAttribute("data-protein"),
      });

      obj.addDietInfo(currentMeal.getAttribute("data-clean-diet-str").split(", ").map(x => x.trim()));

      obj.addAllergyInfo(currentMeal.getAttribute("data-allergens").split(", ").map(x=>x.trim()));
      
      obj.addHealth(parseInt(currentMeal.getAttribute("data-healthfulness"))/10);

      obj.addCarbon(currentMeal.getAttribute("data-carbon-list"));

      obj.addHalls([url.substring(url.indexOf("menus/") +6 ,url.indexOf("/menu"))]);

      obj.addDates([date]);

      obj.addMealTimes([time]);

      obj.addIngredients(currentMeal.getAttribute("data-ingredient-list").split(", "));

      let remove = false;
      for (let j = 0; j< obj.ingredients.length; j++) {

        if (obj.ingredients[j].includes("(") && !remove) {
          remove = obj.ingredients[j].includes(")") ? false : true;
          obj.ingredients[j] = obj.ingredients[j].substring(0, obj.ingredients[j].indexOf("(")-1).trim();
          if (obj.ingredients[j] === "") {
            obj.ingredients.splice(j,1);
            j--;
          }
        }
        else if (obj.ingredients[j].includes(")")) {
          remove = false;
          obj.ingredients[j] = obj.ingredients[j].substring(obj.ingredients[j].indexOf(")")+1).trim();
          if (obj.ingredients[j] === "") {
            obj.ingredients.splice(j,1);
            j--;
          }
        }
        else if (remove) {
          obj.ingredients.splice(j,1);
          j--;
        }
      }

      obj.ingredients = obj.ingredients.map(str =>
        str.includes(":") ? str.substring(str.indexOf(":")+2) :
          str.includes("[") ? str.substring(0,str.indexOf("[")-1) :
            str.includes("]") ? str.substring(str.indexOf("]")+1) : str

      ).map(str => str.trim()).filter(str => str.length > 0);

      mealArr.push(currentMeal);
    }

    return mealArr;
}

//const url = 'https://umassdining.com/locations-menus/worcester/menu';


//scrapeMeals(url,"12/11/2024","breakfast");
//scrapeMeals(url,"12/12/2024","breakfast");

export default scrapeMeals;