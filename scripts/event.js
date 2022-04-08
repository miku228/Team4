//2022-04-05 added by Jiyoung Choi
//Displaying recipe pictures for each country

/******* Global variables *******************/
var  recipes ;  // get recipies.json file data

/******* functions for eventlisteners**********/

function getRecipesJson() {
    //connect AJAX and read recipes.json file to get image directory
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log("connection is successful!!");  //test
        const getRecipes = httpRequest.response;  //get recipes.json file data
        const receivedRecipes = JSON.parse(getRecipes);
        recipes = receivedRecipes;
    }
    else {
            console.log("There is an error!!!");
    }

    };
    httpRequest.open("GET", "recipes.json");
    httpRequest.responseType = 'text';
    httpRequest.send();
}
getRecipesJson();

//displaying recipe images in the landing page content
function displayRecipes(e, country) {
   const contentDiv = document.querySelector("#contents");
   const displayRecipeDiv = document.createElement('div');
   displayRecipeDiv.setAttribute("id","displayRecipe-container");  //recipe pictures container
   contentDiv.append(displayRecipeDiv); 
   const displayRecipe = document.querySelector("#displayRecipe-container");
   
   
   //create displaying recipe titles
    const recipeHeader = document.querySelector('#contents > h1');
    recipeHeader.textContent = country + ' Food Recipe';

  //Display pictures in #displayRecipe-container
    for (let i =0 ; i < e.length ; i++) {
        //create div element
         const div = document.createElement("div");
        // create <a> element
        //  const anchor = document.createElement('a'); 
        //  anchor.setAttribute("href",e[i].page);
         const anchor = document.createElement('a'); 
         anchor.setAttribute("href","detail.html");
         anchor.setAttribute("class","goto_detail");

        
        //image
         const img = document.createElement("img");
         img.setAttribute("src", e[i].pictureDir);
         img.setAttribute("alt", e[i].name +"Image");
         img.setAttribute("class","pic goto_detail")
         img.setAttribute("data-genre", country)
         img.setAttribute("data-index", i)
         anchor.appendChild(img);  //add anchor to image
         div.append(anchor);
        
         //add content pictures in landing page content
         displayRecipe.append(div);
    }
}

/********* End of functions *********************/

/******* Event Listner Sections *****************/

//korean recipe menu clicked
document.querySelector('.recipe-korean').addEventListener("click", (e) => {
     //remove all the contents in the container 
     $('.container_grid').empty();
     let countDisplayContainer = document.querySelectorAll("#displayRecipe-container");
     for ( let i=0; i < countDisplayContainer.length; i++) {
        $('#displayRecipe-container').remove();
     }
     //get recipes info from recipes.json file
     displayRecipes(recipes.Korean, "Korean");
     e.preventDefault();
}) ;


//chinese recipe menu clicked
document.querySelector('.recipe-chinese').addEventListener("click", (e) => {
    //remove all the contents in the 
    let countDisplayContainer = document.querySelectorAll("#displayRecipe-container");
    $('.container_grid').empty();
    for ( let i=0; i < countDisplayContainer.length; i++) {
        $('#displayRecipe-container').remove();
     }
    //get recipes info from recipes.json file
    displayRecipes(recipes.Chinese, "Chinese");
    e.preventDefault();
}) ;


//japanese recipe menu clicked
document.querySelector(".recipe-japanese").addEventListener("click", (e) => {
     //remove all the contents in the 
     let countDisplayContainer = document.querySelectorAll("#displayRecipe-container");
     $('.container_grid').empty();
     for ( let i=0; i < countDisplayContainer.length; i++) {
        $('#displayRecipe-container').remove();
     }
     //get recipes info from recipes.json file
     displayRecipes(recipes.Japanese, "Japanese");
     e.preventDefault();
}) ;



