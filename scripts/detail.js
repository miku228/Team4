// const genre = '';
// const index = '';
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
    let recipe = JSON.stringify(recipes[genre][index]);
    $('#details').text(recipe)
}

getdata();