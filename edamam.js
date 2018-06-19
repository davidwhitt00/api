const baseURL = "https://api.edamam.com/search";
const key = "3914fd30e49033c99cd3e23d1ba0af29";
const appKey = "4505132f"
const searchTerm = document.querySelector('.search');
const body = document.querySelector("body");
let url;

const searchForm =document.querySelector("form");


searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault(); 
    url = `${baseURL}?q=${searchTerm.value}&app_id=${appKey}&app_key=${key}`;

fetch(url)
.then(function(result) {
    console.log(result)
    return result.json();
})
.then(function(json) {
    console.log(json);
    displayResults(json);   
})
function displayResults(json) {
     console.log('Display Results', json);
     console.log(json.hits);
     let recipes = json.hits
     for (r of recipes)  {
      //console.log(r.recipe.label);  
      let label = document.createElement("h1");
      let img = document.createElement("img");
      let cal = document.createElement("h3");
      label.innerText = r.recipe.label;
      img.src = r.recipe.image;
      let calcount = Math.round(r.recipe.calories);
      cal.innerText = calcount + " Calories"
      body.appendChild(label);
      body.appendChild(img);
      body.appendChild(cal);
      
      let ing = r.recipe.ingredients
      for(i in ing){
        let ingredients = document.createElement("p");
        console.log(ing[i]);
        ingredients.innerHTML = "<span>" + ing[i].text + "</span>";
        body.appendChild(ingredients);
        }

     }
    }
} 