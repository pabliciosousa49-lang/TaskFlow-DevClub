// Elementos da navegação — Seleção - localizar controles e views da aplicação
const botaoHome = document.querySelector("#abrir-home");
const botaoTaskFlow = document.querySelector("#abrir-taskflow");
const viewHome = document.querySelector("#view-home");
const viewTaskFlow = document.querySelector("#view-taskflow");

// Tópicos do TaskFlow — Seleção - localizar todos os tópicos disponíveis
const topicosTaskFlow = document.querySelectorAll(".topico-taskflow");

// Distribuição dos tópicos — Processamento - calcular o ângulo de cada tópico no círculo
topicosTaskFlow.forEach(function (topico, indice) {

    const angulo = (360 / topicosTaskFlow.length) * indice;

    console.log(indice, angulo);

});

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

// Retorno para Home — Escuta - identificar clique no acesso à Home

botaoHome.addEventListener("click", function (event) {

    event.preventDefault();


    // Troca para Home — Atualização - restaurar a view inicial da aplicação

    viewTaskFlow.classList.remove("view-ativa");
    viewHome.classList.add("view-ativa");

    botaoTaskFlow.classList.remove("item-menu-ativo");
    botaoHome.classList.add("item-menu-ativo");

});