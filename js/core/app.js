// Elementos da navegação — Seleção - localiza os acessos e as telas existentes
const botaoHome = document.querySelector("#abrir-home");
const botaoTaskFlow = document.querySelector("#abrir-taskflow");
const viewHome = document.querySelector("#view-home");
const viewTaskFlow = document.querySelector("#view-taskflow");

// Animação da recepção — Processamento - reinicia a entrada a cada abertura do TaskFlow
function iniciarRecepcao() {
    viewTaskFlow.classList.remove("taskflow-entrada");
    // Reinício visual — Observação - recalcula o layout para reiniciar a animação CSS
    void viewTaskFlow.offsetWidth;
    viewTaskFlow.classList.add("taskflow-entrada");
}

// Abertura do TaskFlow — Escuta - exibe a recepção e inicia sua apresentação
botaoTaskFlow.addEventListener("click", function (event) {
    event.preventDefault();
    // Estado da interface — Atualização - ativa a recepção e seu acesso no menu
    viewHome.classList.remove("view-ativa");
    viewTaskFlow.classList.add("view-ativa");
    botaoHome.classList.remove("item-menu-ativo");
    botaoTaskFlow.classList.add("item-menu-ativo");
    iniciarRecepcao();
});

// Retorno para Home — Escuta - restaura a tela inicial sem acumular listeners
botaoHome.addEventListener("click", function (event) {
    event.preventDefault();
    // Estado da interface — Atualização - encerra a entrada e restaura a Home
    viewTaskFlow.classList.remove("view-ativa", "taskflow-entrada");
    viewHome.classList.add("view-ativa");
    botaoTaskFlow.classList.remove("item-menu-ativo");
    botaoHome.classList.add("item-menu-ativo");
});
