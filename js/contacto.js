"use strict";
document.addEventListener("DOMContentLoaded", function() {// esta funcion solo se ejecutara una vez que el dom (html) este completo 
// se declaran los elementos del form por su id, permitiendo que se puedan acceder
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let consulta = document.getElementById("consulta");
let botoneviar = document.getElementById("enviar")
let informacion = [];// este arreglo vacio se usa para almacenar los valores ingresados por el usuario 

    botoneviar.addEventListener("click", (e) =>{//accion para que el boton de enviar ejecute un click cuando se oprima
        e.preventDefault();//previene la recarga de la pagina al hacer click
        //las lineas toman los valores ingresados del form y almacenan en el arreglo informacion
        informacion[0] = nombre.value;
        informacion[1] = apellido.value;
        informacion[2] = telefono.value;
        informacion[3] = email.value;
        informacion[4] = consulta.value;
        
        console.log(`su nombre es ${informacion[0]} , su apellido es ${informacion[1]} , su telefono es ${informacion[2]} y su email es ${informacion[3]} y tiene una consulta ${informacion[4]}`);
       // se crea el objeto blob que contiene info del fomr join
        let blob = new Blob([informacion.join("\n")], {type: "text/plain;charset=utf-8"});
        //se usa la funcion saveas para descargar el blob como un archivo de texto llamado
        saveAs(blob, "contacto.txt");
    });
});