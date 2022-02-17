const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const number = document.getElementById("number");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validacionInputs();
});

function validacionInputs() {
  //Obteniendo valores de los inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const numberValue = number.value.trim();

  if (usernameValue == "") {
    //Mostrar error

    //Añadir clase error
    añadirErrorPara(username, "Nombre no puede ser blanco");
  } else {
    //Añadir clase success
    añadirExitoPara(username);
  }

  if (emailValue == "") {
    //Mostrar error

    //Añadir clase error
     añadirErrorPara(email, "email no puede ser blanco");
  } else if(!isEmail(emailValue)){
    //Añadir error validando
     añadirErrorPara(email, "email no es valido");
  }else{
	  añadirExitoPara(email);
  }

  if (passwordValue == "") {
    //Mostrar error

    //Añadir clase error
    añadirErrorPara(password, "Contraseña no puede ser blanco");
  } else if(!isPassword(passwordValue)){

	    añadirErrorPara(password, "Contraseña no valida");

  }else{
    //Añadir clase success
    añadirExitoPara(password);
  }


  if (password2Value == "") {
    //Mostrar error

    //Añadir clase error
    añadirErrorPara(password2, "Contraseña no puede ser blanco");
  } else if(!password2 === password) {

    añadirErrorPara(password2, "Contraseña no coinciden")
    
  }else{
    //Añadir clase success
    añadirExitoPara(password2);
  }

  if (numberValue == "") {
    //Mostrar error

    //Añadir clase error
    añadirErrorPara(number, "numero no puede ser blanco");
  } else if(!isNumber(numberValue)){

    añadirErrorPara(number, "numero invalido");

   
  }else{
     //Añadir clase success
     añadirExitoPara(number);
  }
}


//Validaciones

function añadirErrorPara(variable, mensaje) {
  const formControl = variable.parentElement;
  const small = formControl.querySelector("small");

  //añadiendo mensaje de error
  small.innerText = mensaje;

  //Clase error

  formControl.className = "form-control error ";
}

function añadirExitoPara(variable) {
  const formControl = variable.parentElement;
  formControl.className = "form-control success";
}



// Validaciones regex
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password) {
	return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
}
  
function isNumber(number){
  return /^\d{1,8}$/.test(number);
}