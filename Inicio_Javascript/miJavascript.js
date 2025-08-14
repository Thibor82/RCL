/*Declara e inicializa dos variable
llamadas Nombre de tipo String, Edad de tipo NumEntero*/

let nombre = "Rubén";
let edad = 43;

/* Crea una operacion sencilla con la variable edad,
declara una variable llamada SUMA y que guarde la suma de 
edad mas 5 */

let suma = edad + 5;

document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("mensaje").innerText = 
    `Hola ${nombre}, dentro de 5 años tendrás ${suma} años.`;
    document.getElementById("mensaje").classList.remove("alert-danger");
    document.getElementById("mensaje").classList.add("alert-success");
    });

