// Predicción 1: ¿Qué indicará console.log cuando se llame a esta función?

function myBirthYearFunc(){
        console.log("Nací en " + 1980);
    }

// Imprimirá en un Pop-Up la frase "Naci en 1980"
// ---------------------------------------------

// Prediccion 2:  Si la variable EntradaAñoNacimiento es 1980 (también conocida como var EntradaAñoNacimiento = 1980), y se llama a esta función, ¿qué indicará console.log?
function myBirthYearFunc(EntradaAñoNacimiento){
    console.log("Nací en " + EntradaAñoNacimiento);
}
// Reemplazará el valor ingresado en la variable/parámetro EntradaAñoNacimiento para imprimir la frase "Naci en X"
// ---------------------------------------------

//Predicción 3: Intentémoslo otra vez. Si var num1 = 10 y var num2 = 20, ¿qué indicaría console.log?

function add(num1, num2){
    console.log("¡Sumando números!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}

// Imprimiria la suma entre dos numeros ingresados en la consola.

//Funcion de practica 

function myBirthYearFunc(){
        document.getElementById("demo").innerHTML = "Quiero hacer algo"
    }
