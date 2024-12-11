import {JSDOM} from "jsdom";
import Meal from "../frontend/AddMeal.js";



const url = 'https://umassdining.com/locations-menus/worcester/menu'; // Replace with the target URL

  // Fetch the HTML content
  const response = await fetch(url);
  const html = await response.text();

  // Parse the HTML content
  const parser = new JSDOM(html);
  const body = parser.window.document;
  const elem = body.getElementById("breakfast_menu");
  const meals = elem.querySelectorAll(".lightbox-nutrition");
  const times = ["lunch_menu", "dinner_menu","breakfast_menu"];
  const mealArr = new Array<Meal>(50);

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
    console.log((obj.nutritionInfo.cals));
  }