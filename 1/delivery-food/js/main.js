const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// day 1
// const
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

//let
let login = localStorage.getItem('gloDelivery');

//functions

function toogleModalAuth() {
  modalAuth.classList.toggle('is-open');
}

function loginInputBorderStyle() {
  loginInput.style= "border-color: none";
}

function autorized() {
  
  function logOut(){
    login = null;
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonOut.removeEventListener('click', logOut);
    localStorage.removeItem('gloDelivery');
    checkAuth();
  }

  console.log('Авторизован');

  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click', logOut); 
}

function notAutorized() {
  console.log('Не авторизован');

  function logIn(event) {
  event.preventDefault();
  login = loginInput.value;
  if(login){
    localStorage.setItem('gloDelivery', login);
    toogleModalAuth();
    logInForm.reset(); 
    buttonAuth.removeEventListener('click', toogleModalAuth); 
    closeAuth.removeEventListener('click', toogleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    loginInput.removeEventListener('click', loginInputBorderStyle);
    checkAuth();
  }else{
    alert('Поле "Логин" обязательно к заполнению!');
    loginInput.style = "border-color: #ff0037";
    loginInput.addEventListener('click', loginInputBorderStyle);
  }
    
  }

  buttonAuth.addEventListener('click', toogleModalAuth); 
  closeAuth.addEventListener('click', toogleModalAuth);
  logInForm.addEventListener('submit', logIn);
}


function checkAuth(){
  if (login){
    autorized();
  }else{
    notAutorized();
  }
}

checkAuth();
