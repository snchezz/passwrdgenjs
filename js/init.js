// Copy
function copyPassword() {
  var copyText = document.getElementById("passGenerated");
  if (copyText.value === "") {
    M.toast({ html: 'No se puede copiar algo vacio, crea una contraseña primero' })
  } else {
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    M.toast({ html: 'Contraseña copiada' })
  }
}

// slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = slider.value;
}


// Pass
function getChar(num) {
  return document.querySelector("input[name=" + num + "]").checked
}

function generatePassword() {
  if (!document.querySelector("input[name=charsetMin]").checked && !document.querySelector("input[name=num]").checked && !document.querySelector("input[name=sym]").checked && !document.querySelector("input[name=charsetMay]").checked) {
    M.toast({ html: 'No se puede generar una contraseña sin haber elegido parametros' })
    console.log("No se puede generar una contraseña sin haber elegido parametros")
    document.getElementById("passGenerated").value = ""
    return
  }

  let password = ""
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let alphabetM = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let number = "0123456789"
  let symbol = "!@#$%^&*+="

  if (getChar("charsetMin")) password += alphabet
  if (getChar("charsetMay")) password += alphabetM
  if (getChar("num")) password += number
  if (getChar("sym")) password += symbol

  var length = slider.value;
  let result = ""
  for (let i = 0, n = password.length; i < length; ++i) {
    let num = Math.floor(Math.random() * password.length)
    result += password[num]
  }

  console.log(result)
  document.getElementById("passGenerated").value = result
}

// Ojo pass

var clicked = 0;

$(".toggle-password").click(function (e) {
  e.preventDefault();

  $(this).toggleClass("toggle-password");
  if (clicked == 0) {
    $(this).html('<span class="material-icons">visibility_off</span >');
    clicked = 1;
  } else {
    $(this).html('<span class="material-icons">visibility</span >');
    clicked = 0;
  }

  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


// pass check

function checkPass() {

  let pass = document.getElementById("password");
  var patron = /^[A-Za-z]^/;
  let malapass = document.getElementById("unsure")
  let buenapass = document.getElementById("sure")


  if (pass.value.match(patron)) {
    console.log("hola")
    buenapass = true
    malapass = false
  } else {
    buenapass = false
    malapass = true
    console.log("adio")
  }

  //minimum password length validation  


  var patron1 = /^[A-Za-z]\w/;
  if (pass.value.match(patron1)) {
    return true;
  }
  else {
    alert('Wrong...!')
    return false;
  }
}

