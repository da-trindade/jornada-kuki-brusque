const botaoComecar = document.getElementById("botao-comecar");

const telaInicial = document.getElementById("tela-inicial");

botaoComecar.addEventListener("click", function(){

    telaInicial.style.display = "none";

    document.getElementById("pergunta1").style.display = "flex";

});

function verificarResposta(correta, numeroPergunta){

    if(correta){

        alert("MUITO BEM! KUKI FICOU FELIZ!");

        document.getElementById("pergunta" + numeroPergunta).style.display = "none";

        if(numeroPergunta == 15){

            document.getElementById("tela-final").style.display = "flex";

        } else {

            document.getElementById("pergunta" + (numeroPergunta + 1)).style.display = "flex";

        }

    } else {

        alert("OPS! TENTE NOVAMENTE!");

    }

}

function reiniciarJogo(){

    location.reload();

}