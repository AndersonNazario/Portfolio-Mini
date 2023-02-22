/*
Objetivo - quando clicar na temos que mostrar 
o conteudo da aba que foi cliada pelo usuario
esconder o contedo da aba anterior
*/

// Pegar os elementos que representam as abas no html
const abas = (document.querySelectorAll(".aba"));

abas.forEach(aba => {
    //Indentificar o clique no elemento aba
    aba.addEventListener("click", function() {
        if(aba.classList.contains("selecionado")){
            return;
        }
        
        selecionarAba(aba);

        //esconder o conteudo anterior
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado")

        //mostrar o conteudo da aba selecionada
        const idDoElementoDeInformacaosDaAba = `informacao-${aba.id}`

        const informacaoASerInformada = document.getElementById(idDoElementoDeInformacaosDaAba)
        informacaoASerInformada.classList.add("selecionado")

    });
});

function selecionarAba(aba){
      // quando o usurio clicar, desmarcar a aba selecionada
      const abaSelecionada = document.querySelector(".aba.selecionado");
      abaSelecionada.classList.remove("selecionado")

      //marcar a aba clicada
      aba.classList.add("selecionado")
}