document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); //Evita recargar la pagina

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    //Ejemplo simple: usuario y contraseña fijos
    if(username === "admin" && password === "1234") {
        message.style.color = "green";
        message.textContent = "Login exitoso";
    } else {
        message.style.color = "red";
        message.textContent = "Usuario o contraseña incorrectos";
    }
});