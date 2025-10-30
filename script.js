
(function () {
  var botao = document.getElementById('botaoFrase');
  var area = document.getElementById('fraseAtiva');

  var frases = [
    "Você importa — um passo de cada vez.",
    "Respire fundo: você está fazendo o melhor que pode.",
    "Peça ajuda quando precisar. Coragem é pedir apoio.",
    "Pequenas vitórias também contam — celebre-as.",
    "Você é capaz de seguir em frente, mesmo devagar."
  ];

  if (botao && area) {
    botao.addEventListener('click', function () {
      var i = Math.floor(Math.random() * frases.length);
      area.textContent = frases[i];
    });
  }
})();
