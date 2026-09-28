// Elementos da navegação — Seleção - localizar controles e views da aplicação
const botaoHome = document.querySelector("#abrir-home");
const botaoTaskFlow = document.querySelector("#abrir-taskflow");
const viewHome = document.querySelector("#view-home");
const viewTaskFlow = document.querySelector("#view-taskflow");

// Tópicos do TaskFlow — Seleção - localizar todos os tópicos disponíveis
const topicosTaskFlow = document.querySelectorAll(".topico-taskflow");

// Distribuição dos tópicos — Processamento - calcular a posição de cada tópico no círculo
const raio = 300;
topicosTaskFlow.forEach(function (topico, indice) {

    const angulo = (360 / topicosTaskFlow.length) * indice;
    const anguloRadianos = angulo * (Math.PI / 180);

    const posicaoX = Math.cos(anguloRadianos) * raio;
    const posicaoY = Math.sin(anguloRadianos) * raio;

    // Posição visual — Atualização - aplicar as coordenadas calculadas ao tópico
    topico.style.transform = `translate(-50%, -50%) translate(${posicaoX}px, ${posicaoY}px)`;
});

// Abertura do TaskFlow — Escuta - identificar clique no acesso ao TaskFlow
botaoTaskFlow.addEventListener("click", function (event) {

    event.preventDefault();


    // Troca para TaskFlow — Atualização - alterar a view visível da aplicação

    viewHome.classList.remove("view-ativa");
    viewTaskFlow.classList.add("view-ativa");

    botaoHome.classList.remove("item-menu-ativo");
    botaoTaskFlow.classList.add("item-menu-ativo");

    // Entrada dos tópicos — Atualização - iniciar sequência após abertura do TaskFlow

    topicosTaskFlow.forEach(function (topico, indice) {

        setTimeout(function () {

            topico.classList.add("topico-visivel");

        }, indice * 100);

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
});