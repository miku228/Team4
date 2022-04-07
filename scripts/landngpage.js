// get json data
function populatexml() {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        // Everything is good, the response was received.
        if (httpRequest.status === 200) {
          const data = JSON.parse(httpRequest.responseText);
        //   console.log(data)
          setgallery(data)
        } else {
          // There was a problem with the request.
          alert('There was a problem with the request.');
        };
  
      } else {
          // Not ready yet.
      };
    };
  
    httpRequest.open('GET', '/recipes.json');
    httpRequest.send();
  }

// get img tag to set image to each 9 item of them
function setgallery(obj){
    let recipes = obj
    let images = $('.gallery-items .food_image').children();
    let imgsrc = '';
    let imgalt = '';
    let imggenre = '';
    let imgindex = '';
    // set img src and alt
    $('.gallery-items .food_image .goto_detail').children('img').each(function(i,v){
        if(i < 3) {
            imggenre = 'Chinese';
            imgindex = i;
            imgsrc = recipes[imggenre][i].pictureDir;
            imgalt = recipes[imggenre][i].name;
        }else if(i > 2 && i < 6) {
            imggenre = 'Korean';
            imgindex = i-3;
            imgsrc = recipes[imggenre][imgindex].pictureDir;
            imgalt = recipes[imggenre][imgindex].name;
        }else if(i > 5 && i < 9) {
            imggenre = 'Japanese';
            imgindex = i - 6;
            imgsrc = recipes[imggenre][imgindex].pictureDir; 
            imgalt = recipes[imggenre][imgindex].name; 
        }
        $(this).attr('src', imgsrc);
        $(this).attr('alt', imgalt);
        $(this).attr('data-genre', imggenre);
        $(this).attr('data-index', imgindex);
    });

    $('.gallery-items .food_name').each(function(i,v){
        let imgname = '';
        if(i < 3) {
            imgname = recipes['Chinese'][i].name;
        }else if(i > 2 && i < 6) {
            imgname = recipes['Korean'][i-3].name;
        }else if(i > 5 && i < 9) {
            imgname = recipes['Japanese'][i-6].name; 
        }
        $(this).text(imgname)
    });
}

populatexml()


$('.goto_detail').on('click', function(){
    console.log($(this))
    let selsctedgenre = $(this).children('img').attr('data-genre');
    let selsctedindex = $(this).children('img').attr('data-index');
    // set selected item to session storage
    sessionStorage.setItem("genre", selsctedgenre);
    sessionStorage.setItem("index", selsctedindex);
    // redirect to detail.html
    // location.href = "http://127.0.0.1:8887/detail.html";

})