/* || functions */

// 2021-04-01 added by miku abe
function openNav() {
    $('#mySidenav').width(250);
    $('main').css('margin-left', '250px');
    $('body').css('background-color', 'rgba(0,0,0,0.4)')
}

// 2021-04-01 added by miku abe
function closeNav() {
    $('#mySidenav').width(0);
    $('main').css('margin-left', '0px');
    $('body').css('background-color', 'rgba(254,250,224,1)')
}

/* || Event Handlers */

// 2021-04-01 added by miku abe
$('.closenavbtn').on('click', closeNav)
$('.opennavbtn').on('click', openNav)

// check the login status
// 2021-04-06 added by abe
if(sessionStorage.getItem('userlogin')) {
    $('#login_link').hide()
    $('#logout_link').show()
    
}else{
    $('#login_link').show()
    $('#logout_link').hide()
}