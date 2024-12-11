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
  



  

  console.log(meals.length);