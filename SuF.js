let password = document.getElementById('password');
let conferPassword = document.getElementById('conferPassword');
let message = document.getElementById('message');

let Confer = function() {
    if(password.value == conferPassword.value){
        message.style.color = 'blue';
        message.innerHTML = 'matching';
    } else {
        message.style.color = 'red';
        message.innerHTML = 'not matching';
    }
}