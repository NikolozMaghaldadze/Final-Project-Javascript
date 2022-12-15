"use strict"


let formRegistration = document.getElementById("formClass");

formRegistration.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  // usernameField
  let username = document.getElementById("username").value;

  if (username == " " && username.length < 5) {
    errors.username = "U must fill username field !";
  }
  if (username.length < 5) {
    errors.username = "U must use more than 5 characters !";
  }

  // password
  let password = document.getElementById("password").value;

  if (password == "") {
    errors.password = "Enter Password First !";
  }

  let pass2 = document.getElementById("pass2").value;

  if (pass2 != password) {
    errors.pass2 = "passwords do not match !";
  }

  // checkbox

  let agree = document.getElementById("checkbox").checked;

  if (!agree) {
    errors.agree = "U must agree terms and conditions !";
  }

  for (let item in errors) {
    let spancontent = document.getElementById("error_" + item);

    if (spancontent) {
      spancontent.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    formRegistration.submit();
  }

});

let validEmail = document.getElementById("email");

validEmail.addEventListener("keyup", function () {
  let emailValue = document.getElementById("email").value;
  let errorEmail = document.getElementById("error_email");
  let regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (emailValue.match(regex)) {
      errorEmail.textContent = 'Your email is valid !';
      errorEmail.style.color = 'green';
  }else{
      errorEmail.textContent = 'Your email is invalid';
      errorEmail.style.color = 'red';
  }

  });

  let showPassword = document.getElementById("password");
  let showPassword2 = document.getElementById("pass2");

  let toggleIcon = document.getElementById("showPassword");
  let toggleIcon2 = document.getElementById("showPassword2");

  toggleIcon.addEventListener("click", function(){
    if (showPassword.type == "password") {
        showPassword.setAttribute("type" , "text");
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    }else{
        showPassword.setAttribute("type" , "password");
        toggleIcon.classList.add("fa-eye");
        toggleIcon.classList.remove("fa-eye-slash");
    }
  });

  toggleIcon2.addEventListener("click", function(){
    if (showPassword2.type == "password") {
        showPassword2.setAttribute("type" , "text");
        toggleIcon2.classList.remove("fa-eye");
        toggleIcon2.classList.add("fa-eye-slash");
    }else{
        showPassword2.setAttribute("type" , "password");
        toggleIcon2.classList.add("fa-eye");
        toggleIcon2.classList.remove("fa-eye-slash");
    }
  });

  // checkbox


  
