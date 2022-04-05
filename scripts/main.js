/* Set the width of the side navigation to 250px 
and the left margin of the page content to 250px 
and add a black background color to body */
function openNav() {
    document.querySelector('#mySidenav').style.width = "200px";
    document.querySelector('#main').style.marginLeft = "200px";  /* jiyoung modified April 4,2022*/
}

/* Set the width of the side navigation to 0 
and the left margin of the page content to 0, 
and the background color of body to white */
function closeNav() {
    document.querySelector('#mySidenav').style.width = "0";
    document.querySelector('#main').style.marginLeft = "0";  /* jiyoung modified April 4,2022*/
}