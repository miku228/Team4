/* || functions */

// 2020-04-01 added by miku abe
function openNav() {
    $('#mySidenav').width(250);
    $('main').css('margin-left', '250px');
    $('body').css('background-color', 'rgba(0,0,0,0.4)')
    // document.querySelector('#mySidenav').style.width = "200px";
    // document.querySelector('#main').style.marginLeft = "200px";  /* jiyoung modified April 4,2022*/

}

// 2020-04-01 added by miku abe
function closeNav() {
    $('#mySidenav').width(0);
    $('main').css('margin-left', '0px');
    $('body').css('background-color', 'rgba(254,250,224,1)')
}

/* || Event Handlers */

// 2020-04-01 added by miku abe
$('.closenavbtn').on('click', closeNav)
$('.opennavbtn').on('click', openNav)

    // document.querySelector('#mySidenav').style.width = "0";
    // document.querySelector('#main').style.marginLeft = "0";  /* jiyoung modified April 4,2022*/
// }

