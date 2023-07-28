const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if(nameInput.value === "") {
        alert("Por favor, preencha o seu nome.");
        return;
    }

    // Verifica se o email está vazio ou é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha um email válido.");
        return;
    }

    form.submit(); // Correção do nome da função para "submit"
});

function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
}
