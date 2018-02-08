// variables 
let username = document.getElementById('username');
let password = document.getElementById('password');
let btnLogin = document.getElementById('btn-login');
let validatePassword = false;
let validateUsername = false;

btnLogin.setAttribute('disabled', 'disabled');
// funciones

function allValidate() {
  if (validateUsername && validatePassword) {
    activeLogin();
  } else {
    inactiveLogin();
  }
};

const activeLogin = () => {
  btnLogin.removeAttribute('disabled', 'disabled');
};

const inactiveLogin = () => {
  btnLogin.setAttribute('disabled', 'disabled');
};

const validatePasswordUser = () => {
  let textPassword = password.value;
  const REGPASSWORD = /^[0-9a-zA-Z]+$/;
  if (REGPASSWORD.test(textPassword) && textPassword.length >= 6 && textPassword !== '123456') {
    validatePassword = true;
    allValidate();
  } else {
    validatePassword = false;
    inactiveLogin();
  }
};

const validateNameUser = () => {
  let textUsername = username.value;
  const REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
  if (REGEXEMAIL.test(textUsername)) {
    validateUsername = true;
    allValidate();
  } else {
    validateUsername = false;
    inactiveLogin();
  }
};


const nextPage = () => {
  window.location.href = 'views/index.html';
};

// eventos
username.addEventListener('keyup', validateNameUser);
password.addEventListener('keyup', validatePasswordUser);
btnLogin.addEventListener('click', nextPage);