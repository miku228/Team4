/* || functions */

// 2020-04-01 added by miku abe
function openNav() {
    $('#mysidenav').width(250);
    $('main').css('margin-left', '250px');
    $('body').css('background-color', 'rgba(0,0,0,0.4)')
}

// 2020-04-01 added by miku abe
function closeNav() {
    $('#mysidenav').width(0);
    $('main').css('margin-left', '0px');
    $('body').css('background-color', 'rgba(254,250,224,1)')
}

/* || Event Handlers */

// 2020-04-01 added by miku abe
$('.closenavbtn').on('click', closeNav)
$('.opennavbtn').on('click', openNav)