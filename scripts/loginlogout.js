// 2022-04-06 first write by miku

var objUsers = [
    {
        username: "user01",
        password: "algonquin01"
    },
    {
        username: "user02",
        password: "algonquin02"
    },
    {
        username: "user03",
        password: "algonquin03"
    }
];

function login(event) {
     // cancel send form content to the URL
    event.preventDefault();
    let input = $('input');
    let username = input[0].value;
    let password = input[1].value;
    input[0].nextElementSibling.textContent = '';
    input[1].nextElementSibling.textContent = '';
    
    for(v of objUsers) {
        if(username == v.username && password == v.password){
            console.log('correct')
            loginflag = true;
            sessionStorage.setItem('userlogin', 'true');
            location.reload()
            // window.location.href = "index.html";
            return;
        }
    }
    if(username == '') input[0].nextElementSibling.textContent = 'Username is empty';
    if(password == '') {
        input[1].nextElementSibling.textContent = 'Password is empty';
    }else{
        input[1].nextElementSibling.textContent = 'Username or password are wrong'

    }
}

function logout() {
    sessionStorage.removeItem('userlogin');
    $('#loginform').show()
    $('#logout').hide()
}

if(sessionStorage.getItem('userlogin')) {
    $('#loginform').hide()
    $('#logout').show()
    
}else{
    $('#loginform').show()
    $('#logout').hide()
}

$('#login').on('click', login);
$('#logout').on('click', logout)

