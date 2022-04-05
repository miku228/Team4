/* Set the width of the side navigation to 250px 
and the left margin of the page content to 250px 
and add a black background color to body */
function openNav() {
    document.querySelector('#mysidenav').style.width = "200px";
    document.querySelector('main').style.width = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 
and the left margin of the page content to 0, 
and the background color of body to white */
function closeNav() {
    document.querySelector('#mysidenav').style.width = "0";
    document.querySelector('main').style.width = "0";
    document.body.style.backgroundColor = "#FEFAE0";
}
