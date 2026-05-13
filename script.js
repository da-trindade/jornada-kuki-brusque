const botaoComecar = document.getElementById("botao-comecar");

const telaInicial = document.getElementById("tela-inicial");

const pergunta1 = document.getElementById("tela-pergunta1");

const pergunta2 = document.getElementById("pergunta2");


// ESCONDE A PERGUNTA 2
pergunta2.style.display = "none";


// BOTÃO COMEÇAR
botaoComecar.addEventListener("click", function(){

    telaInicial.style.display = "none";

    pergunta1.style.display = "flex";

});


// IR PARA PERGUNTA 2
function proximaPergunta(){

    pergunta1.style.display = "none";

    pergunta2.style.display = "flex";

}