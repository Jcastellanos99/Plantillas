const { name } = require("browser-sync");

var datos = function() {
    
    var contenedor = document.createElement("div");
    var titulo = document.createElement("h2");
    var texto = document.createTextNode("Autores");
    var principal = document.getElementById("principal");
    var nombre = document.getElementById("name").appendChild;

    // var name = $("input#name").val();

    // var formulario = ""
    // nombre.appendChild(nombre);
    titulo.appendChild(texto);
    contenedor.appendChild(titulo);
    contenedor.appendChild(nombre);
    principal.appendChild(contenedor);

    principal.innerHTML= principal.innerHTML;
} 
