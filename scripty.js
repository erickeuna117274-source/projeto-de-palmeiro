const botao = document.querySelector("#botaoMensagem");
const botaoOcultar = document.querySelector("#botaoOcultar");
const msg = document.querySelector("#mensagem");
const nome = document.querySelector("#nome");

botao.addEventListener("click", function() {
    msg.textContent = `Olá! É um prazer falar com você, ${nome.textContent}!`;
});


botaoOcultar.addEventListener("click", function() {
    msg.textContent = "";
});
