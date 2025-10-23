
const botaoModo = document.getElementById("modoEscuro");
botaoModo.addEventListener("click", function() {
  document.body.classList.toggle("escuro");

 
  if(document.body.classList.contains("escuro")){
    botaoModo.textContent = "☀️ Modo Claro";
  } else {
    botaoModo.textContent = "🌙 Modo Escuro";
  }
});


const botaoEnviar = document.getElementById("botaoEnviar");
if(botaoEnviar){
  botaoEnviar.addEventListener("click", function(){
    const texto = document.getElementById("textoReflexao").value;
    if(texto.trim() !== ""){
      alert("Obrigado por compartilhar seus sentimentos 💜");
      document.getElementById("textoReflexao").value = "";
      document.getElementById("contador").textContent = "0";
    } else {
      alert("Por favor, escreva algo antes de enviar.");
    }
  });

 
  const textarea = document.getElementById("textoReflexao");
  const contador = document.getElementById("contador");
  textarea.addEventListener("input", function(){
    contador.textContent = textarea.value.length;
  });
}

const frases = [
  "Você é mais forte do que imagina.",
  "Respire fundo, tudo vai ficar bem.",
  "Cada pequeno passo é uma vitória.",
  "Valorize suas conquistas, mesmo as pequenas.",
  "Não tenha medo de pedir ajuda."
];

const botaoCitacao = document.getElementById("botaoCitacao");
const citacao = document.getElementById("citacao");

if(botaoCitacao){
  botaoCitacao.addEventListener("click", function(){
    const indice = Math.floor(Math.random() * frases.length);
    citacao.textContent = frases[indice];
  });
}
