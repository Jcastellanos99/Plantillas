document.getElementById('contactForm').addEventListener("submit",(e)=>{
    e.preventDefault();
    e.stopPropagation()
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    var usuarios = ["admin@gmail.com"];

    var contrasena = ["123456"];

    if (email.value == 'admin@gmail.com' && password.value == '123456'){
        window.location.href = "http://192.168.1.40/HTML/Proyecto%20III%20Parcial%20Desarrollo/Plantillas/Libros/index.html";
        // window.location.href = "C:/xampp/htdocs/HTML/Proyecto%20III%20Parcial%20Desarrollo/Plantillas/Libros/index.html";
        
    }
    else{
        alert("incorrecto");
    }
})