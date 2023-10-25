// 2022-04-07 write first js file by miku
var recipes = {};

// get json data added by miku 2022-04-07
function populatexml() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      // Everything is good, the response was received.
      if (httpRequest.status === 200) {
        const data = JSON.parse(httpRequest.responseText);
        recipes = data;
      //   console.log(data)
        // setgallery(data)
        setgallery(recipes);
        if(sessionStorage.getItem('genre')){
          getdata();
        }
      } else {
        // There was a problem with the request.
        alert('There was a problem with the request.');
      };

    } else {
        // Not ready yet.
    };
  };

  httpRequest.open('GET', '../Team4/recipes.json');
  httpRequest.send();
}

// get img tag to set image to each 9 item of them added by miku 2022-04-07
function setgallery(obj){
    let recipes_obj = obj
    let imgsrc = '';
    let imgalt = '';
    let imggenre = '';
    let imgindex = '';
    // set img src and alt
    $('.gallery-items .food_image .goto_detail').children('img').each(function(i,v){
        if(i < 3) {
            imggenre = 'Chinese';
            imgindex = i;
            imgsrc = recipes_obj[imggenre][i].pictureDir;
            imgalt = recipes_obj[imggenre][i].name;
        }else if(i > 2 && i < 6) {
            imggenre = 'Korean';
            imgindex = i-3;
            imgsrc = recipes_obj[imggenre][imgindex].pictureDir;
            imgalt = recipes_obj[imggenre][imgindex].name;
        }else if(i > 5 && i < 9) {
            imggenre = 'Japanese';
            imgindex = i - 6;
            imgsrc = recipes_obj[imggenre][imgindex].pictureDir; 
            imgalt = recipes_obj[imggenre][imgindex].name; 
        }
        $(this).attr('src', imgsrc);
        $(this).attr('alt', imgalt);
        $(this).attr('data-genre', imggenre);
        $(this).attr('data-index', imgindex);
    });

    $('.gallery-items .food_name').each(function(i,v){
        let imgname = '';
        if(i < 3) {
            imgname = recipes_obj['Chinese'][i].name;
        }else if(i > 2 && i < 6) {
            imgname = recipes_obj['Korean'][i-3].name;
        }else if(i > 5 && i < 9) {
            imgname = recipes_obj['Japanese'][i-6].name; 
        }
        $(this).text(imgname)
    });
}

populatexml();


// // when img is clicked set data to sessionStorage added by miku 2022-04-07
// $('.goto_detail').on('click', function(){
//     let selsctedgenre = $(this).children('img').attr('data-genre');
//     let selsctedindex = $(this).children('img').attr('data-index');
//     // set selected item to session storage
//     sessionStorage.setItem("genre", selsctedgenre);
//     sessionStorage.setItem("index", selsctedindex);
    
//     // redirect it doesn't work i cannot figure out the reason by miku 2022-04-08
//     // location.href = "detail.html"
//     // window.location.href = 'http://'+ window.location.host + '/detail.html';
//     // window.location.assign('http://'+ window.location.host + '/detail.html')
//     // setTimeout(function(){ window.location.href = "detail.html" }, 1000)
// })


function getdata() {
  var genre = sessionStorage.getItem('genre');
  if(genre == "korean") {
    document.getElementById('recipe-korean').click();
  } else if(genre == "chinese") {
    document.getElementById('recipe-chinese').click();
  } else if(genre == "japanese") {
    document.getElementById('recipe-japanese').click();
  }
  //clear session strage
  sessionStorage.clear();
}


//Displaying recipe pictures for each country
/******* functions for eventlisteners**********/


//displaying recipe images in the landing page content
function displayRecipes(e, country) {
  // location.href = './index.html';
  const contentDiv = document.querySelector("#contents");
  const displayRecipeDiv = document.createElement('div');
  displayRecipeDiv.setAttribute("id","displayRecipe-container");  //make new div for recipe pictures container
  contentDiv.append(displayRecipeDiv); 
  const displayRecipe = document.querySelector("#displayRecipe-container");
  
  
  //create displaying recipe titles
   const recipeHeader = document.querySelector('#contents > h1');
   recipeHeader.textContent = country + ' Food Recipe';

 //Display pictures in #displayRecipe-container
   for (let i = 0 ; i < e.length ; i++) {
       //create div element
        let div = document.createElement("div");
        if(i==0 || i%2 == 0){
          div.setAttribute("class", "gallery_container add_span_2 add_span_row_2");
        }else if(i%2 == 1) {
          div.setAttribute("class", "gallery_container add_span_3 add_span_row_2");
        }
        // div.setAttribute("class", "gallery_container add_span_2 add_span_row_2");
        let divSecond = document.createElement("div");
        divSecond.setAttribute("class", "gallery-items");
        let divThird = document.createElement("div");
        divThird.setAttribute("class", "food_image");
        let divFoodName = document.createElement("div");
        divFoodName.setAttribute("class", "text food_name");
        
       // create <a> element
        let anchor = document.createElement('a'); 
        anchor.setAttribute("href","detail.html");
        anchor.setAttribute("class","goto_detail");
        // anchor.setAttribute("onclick", "sessionDataSend()");
       
       //image
        let img = document.createElement("img");
        img.setAttribute("src", e[i].pictureDir);
        img.setAttribute("alt", e[i].name +"Image");
        img.setAttribute("class","pic")
        img.setAttribute("data-genre", country)
        img.setAttribute("data-index", i)
        anchor.appendChild(img);  //add anchor to image

        divFoodName.textContent = e[i].name;

        div.append(divSecond);
        divSecond.append(divThird);
        divSecond.append(divFoodName);
        divThird.append(anchor);
       
        //add content pictures in landing page content
        displayRecipe.append(div);
        gotoDetail();

   }
}

// clean up the previous display pictures
function cleanUpthecontent(){
  let countDisplayContainer = document.querySelectorAll("#displayRecipe-container");
   if(countDisplayContainer.length > 0) {
    for ( let i=0; i < countDisplayContainer.length; i++) {
      $('#displayRecipe-container').remove();
    }
   }
}
// when img is clicked set data to sessionStorage added by miku 2022-04-07
function gotoDetail(){
  $('.goto_detail').on('click', function(){
    let selsctedgenre = $(this).children('img').attr('data-genre');
    let selsctedindex = $(this).children('img').attr('data-index');
    // set selected item to session storage
    sessionStorage.setItem("genre", selsctedgenre);
    sessionStorage.setItem("index", selsctedindex);
  })
}

/********* End of functions *********************/

/******* Event Listner Sections *****************/

// when img is clicked set data to sessionStorage added by miku 2022-04-07
gotoDetail();

//korean recipe menu clicked
// 1 - in the humbergur menu
document.querySelector('.hum-recipe-korean').addEventListener("click", (e) => {
  document.getElementById('recipe-korean').click();
  e.preventDefault();
  // close nav tab
  document.getElementById('closeNav').click();
})
// 2 - in the header menu
document.querySelector('.recipe-korean').addEventListener("click", (e) => {
    //remove all the contents in the container 
    $('.container_grid').empty();
    cleanUpthecontent();
    //get recipes info from recipes.json file
    displayRecipes(recipes.Korean, "Korean");
    e.preventDefault();
}) ;


//chinese recipe menu clicked
// 1 - in the humbergur menu
document.querySelector('.hum-recipe-chinese').addEventListener("click", (e) => {
  document.getElementById('recipe-chinese').click();
  e.preventDefault();
  // close nav tab
  document.getElementById('closeNav').click();
})
// 2 - in the header menu
document.querySelector('.recipe-chinese').addEventListener("click", (e) => {
   //remove all the contents in the 
   $('.container_grid').empty();
   cleanUpthecontent(); 
   //get recipes info from recipes.json file
   displayRecipes(recipes.Chinese, "Chinese");
   e.preventDefault();
}) ;


//japanese recipe menu clicked
// 1 - in the humbergur menu
document.querySelector('.hum-recipe-japanese').addEventListener("click", (e) => {
  document.getElementById('recipe-japanese').click();
  e.preventDefault();
  // close nav tab
  document.getElementById('closeNav').click();
})
// 2 - in the header menu
document.querySelector(".recipe-japanese").addEventListener("click", (e) => {
    //remove all the contents in the 
    $('.container_grid').empty();
    cleanUpthecontent();
    //get recipes info from recipes.json file
    displayRecipes(recipes.Japanese, "Japanese");
    e.preventDefault();
}) ;

//Sending grene and index into session storage when anchors on each recipe clicked
//modified April 8, 2022 by jiyoung 
// function sessionDataSend() {
//   // var sessionD = document.querySelector("#displayRecipe-container > div a");
//   var sessionD = document.querySelector("#displayRecipe-container > div a img");
//   // console.log('sessionD',sessionD);
//   let selsctedgenre = sessionD.getAttribute('data-genre')
//   let selsctedindex = sessionD.getAttribute('data-index');
//   // console.log('selsctedgenre' ,selsctedgenre);
//   // console.log('selsctedindex', selsctedindex);

//   // set selected item to session storage
//   sessionStorage.setItem("genre", selsctedgenre);
//   sessionStorage.setItem("index", selsctedindex);
  
//  }
