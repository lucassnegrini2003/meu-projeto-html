const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const usuario = document.querySelector('input[type="email"]').value;
    const senha = document.querySelector('input[type="password"]').value;

    if (usuario === "" || senha === "") {
        alert("Preencha todos os campos!");
    } else {
        alert("Login realizado com sucesso!");
    }

});