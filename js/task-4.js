"use strict";

const userLogin = document.querySelector(".login-form");

function formHandler(event) {
    event.preventDefault();
    if (event.target.email.value === "" || event.target.password.value === "" ) {
        alert("All form fields must be filled in");
    } else {
        const data = {
            email: event.target.email.value.trim(),
            password: event.target.password.value.trim()
        }
        console.log(data);
        event.target.reset();
    }
    
}

userLogin.addEventListener("submit", formHandler)
