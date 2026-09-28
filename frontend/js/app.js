// Elementos da navegação — Seleção - localizar controles e views da aplicação

const botaoHome = document.querySelector("#abrir-home");
const botaoTaskFlow = document.querySelector("#abrir-taskflow");

const viewHome = document.querySelector("#view-home");
const viewTaskFlow = document.querySelector("#view-taskflow");


// Abertura do TaskFlow — Escuta - identificar clique no acesso ao TaskFlow

botaoTaskFlow.addEventListener("click", function (event) {

    event.preventDefault();


    // Troca para TaskFlow — Atualização - alterar a view visível da aplicação

    viewHome.classList.remove("view-ativa");
    viewTaskFlow.classList.add("view-ativa");

    botaoHome.classList.remove("item-menu-ativo");
    botaoTaskFlow.classList.add("item-menu-ativo");


    console.log("TaskFlow clicado");

});