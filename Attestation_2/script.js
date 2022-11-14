'use strict'

const email = document.getElementById('email');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');
const information = document.getElementById('information');
let gender;
const registration = document.getElementById('click');
let errorEmail = document.getElementById('error-email');
let errorPassword = document.getElementById('error-password');
let errorRepeatPassword = document.getElementById('error-repeat-password');


registration.addEventListener('click', (event) => {
    event.preventDefault();
    function reset() {
        (errorEmail.style.display = 'none') && (email.style.borderColor = '#787878');
        (errorPassword.style.display = 'none') && (password.style.borderColor = '#787878');
        (errorRepeatPassword.style.display = 'none') && (repeatPassword.style.borderColor = '#787878');
        return;
    }
    reset();
    if (email.value === '') {
        email.style.borderColor ='red';
        errorEmail.innerHTML = 'Поле обязательно для заполнения';
        errorEmail.style.display = 'block';
        return;
    }
    function validateEmail(email) {    
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
        return re.test(String(email).toLowerCase());
    }
    if (!(validateEmail(email.value))) {
        email.style.borderColor = 'red';
        errorEmail.innerHTML = 'Email введён некорректно';
        errorEmail.style.display = 'block';
        return;
    }
    if (password.value === '') {
        password.style.borderColor ='red';
        errorPassword.innerHTML = 'Поле обязательно для заполнения';
        errorPassword.style.display = 'block';
        return;
    }
    if (password.value.length < 8) {
        password.style.borderColor ='red';
        errorPassword.innerHTML = 'Пароль должен содержать не менее 8 символов';
        errorPassword.style.display = 'block';
        return;
    }
    if ((password.value !== repeatPassword.value) || (repeatPassword.value === '')) {
        repeatPassword.style.borderColor ='red';
        errorRepeatPassword.innerHTML = 'Пароли не совпадают';
        errorRepeatPassword.style.display = 'block';
        return;
    }
    function radioActive() {
        let genders = Array.from(document.getElementsByName('gender'));
        gender = genders.find(item => item.checked).value;
    }
    radioActive();

    const objectPerson = {
        Email: email.value,
        Password: password.value,
        RepeatPassword: repeatPassword.value,
        Information: information.value,
        Gender: gender
    } 
    console.log(objectPerson);
});

    


