var btnNumeros = document.getElementsByName("btnNumeros");
var pantallaPrin = document.getElementById("pantallaPrin");
var operadorHistorial = document.getElementById("operadorHistorial");
var btnIgual = document.getElementById("btnIgual");

var signoOperador = document.getElementById("signoOperador");
var Num1Historial = document.getElementById("Num1Historial");
var Num2Historial = document.getElementById("Num2Historial");

var num1 = 0;
var num2 = 0;
var resultado = 0;

btnNumeros.forEach(function(boton){
    boton.addEventListener("click",function(){
        pantallaPrin.value = pantallaPrin.value + boton.value;
    });
});

function validacion(){

    if(pantallaPrin.value == ""){
        pantallaPrin.focus();
    }else if(Num1Historial.innerHTML != "" && operadorHistorial.innerHTML != "" 
    && Num2Historial.innerHTML == ""){
        btnIgual.focus();
    } else{
        num1 = pantallaPrin.value;
        Num1Historial.innerHTML = num1;
        Num2Historial.innerHTML = "";
        pantallaPrin.value = "";
    }
}



function suma(){
    operadorHistorial.innerHTML = "+";
    signoOperador.innerHTML = "+";
    validacion();
}
function resta(){
    operadorHistorial.innerHTML = "-";
    signoOperador.innerHTML = "-";
    validacion();
}
function multiplicacion(){
    operadorHistorial.innerHTML = "x";
    signoOperador.innerHTML = "x";
    validacion();
}
function division(){
    operadorHistorial.innerHTML = "/";
    signoOperador.innerHTML = "/";
    validacion();
}


function operaciones(){
    num2 = pantallaPrin.value;
    Num2Historial.innerHTML = num2;

    switch(signoOperador.innerHTML){

        case "+":
            resultado = parseFloat(num1) + parseFloat(num2);
            break;

        case "-":
                resultado = parseFloat(num1) - parseFloat(num2);
            break;

         case "x":
                resultado = parseFloat(num1) * parseFloat(num2);
            break;

        case "/":
            resultado = parseFloat(num1) / parseFloat(num2);
        break;
    }

    signoOperador.innerHTML = "=";
    pantallaPrin.value = resultado;

}

function resultadoFinal(){
   if(pantallaPrin.value != "" && signoOperador.innerHTML != "" && signoOperador != "="){
    operaciones();
   }else{
       pantallaPrin.focus();
   }
}

function reinicio(){
    num1 = 0;
    num2 = 0;
    resultado = 0;
    pantallaPrin.value = "";
    signoOperador.innerHTML = "";
    Num1Historial.innerHTML = "";
    Num2Historial.innerHTML = "";
    operadorHistorial.innerHTML = "";
}
