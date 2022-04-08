// 2022-04-07 write first js file by miku
function getdata () {
    var genre = sessionStorage.getItem('genre');
    var index = sessionStorage.getItem("index");
  
    console.log(genre);
    console.log(index); 
  
    //clear session strage
    sessionStorage.clear();
    populatexml(genre, index);
}

// get json data
function populatexml(genre, index) {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        // Everything is good, the response was received.
        if (httpRequest.status === 200) {
          const data = JSON.parse(httpRequest.responseText);
          console.log(data)
          setdetail(data, genre, index)
        } else {
          alert('There was a problem with the request.');
        };
      };
    };
  
    httpRequest.open('GET', '/recipes.json');
    httpRequest.send();
}


function setdetail(recipes, genre, index) {
    // let st_recipe = JSON.stringify(recipes[genre][index]);
    let recipe = recipes[genre][index];
    let name = recipe['name'];
    let pictureDir = recipe['pictureDir'];
    let ing_lis = '';
    let inst_lis = '';
    // set ingredients
    for(v of recipe['ingredients']){
        console.log(v);
        ing_lis += '<li>' + v + '</li>'
    };
    for(v of recipe['instructions']){
        console.log(v);
        inst_lis += '<li>' + v + '</li>'
    };
    $('.r_ingredients').children('ul').html(ing_lis);
    $('.r_instructions').children('ol').html(inst_lis);
    $('.r_photos').children('h3').text(name);
    $('.r_photos').children('img').attr('src', pictureDir);
    $('.r_photos').children('img').attr('alt', name);

}

getdata();