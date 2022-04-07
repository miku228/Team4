// get json data
// const recipes = {};
function populatexml() {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        // Everything is good, the response was received.
        if (httpRequest.status === 200) {
          const data = JSON.parse(httpRequest.responseText);
          console.log(data)
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
    let imgalt = ''
    // set img src and alt
    $('.gallery-items .food_image').children().each(function(i,v){
        if(i < 3) {
            imgsrc = recipes['Chinese'][i].pictureDir;
            imgalt = recipes['Chinese'][i].name;
        }else if(i > 2 && i < 6) {
            imgsrc = recipes['Korean'][i-3].pictureDir;
            imgalt = recipes['Korean'][i-3].name;
        }else if(i > 5 && i < 9) {
            imgsrc = recipes['Japanese'][i-6].pictureDir; 
            imgalt = recipes['Japanese'][i-6].name; 
        }
        $(this).attr('src', imgsrc);
        $(this).attr('alt', imgalt);
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