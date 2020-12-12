document.getElementById('contactForm').addEventListener("submit",(e)=>{
    e.preventDefault();
    e.stopPropagation()
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    if (email.value == 'admin@gmail.com' && password.value == '123456'){
           window.location.href = "http://192.168.0.3/HTML/Final/Plantillas/Maquillaje/index.html";
    }
    else{
        alert("incorrecto");
    }
})