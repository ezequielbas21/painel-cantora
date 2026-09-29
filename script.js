// =========================================
// ELEMENTOS
// =========================================

const telaInicial = document.getElementById("tela-inicial");
const telaProgramacao = document.getElementById("tela-programacao");

const btnProgramacao = document.getElementById("btn-programacao");
const btnVoltar = document.getElementById("btn-voltar");


// =========================================
// CONFIGURAÇÃO INICIAL
// =========================================

telaInicial.style.opacity = "0";
telaInicial.style.transform = "translateY(10px)";


// =========================================
// ENTRADA INICIAL DA PÁGINA
// =========================================

window.addEventListener("load", () => {

    requestAnimationFrame(() => {

        telaInicial.style.opacity = "1";
        telaInicial.style.transform = "translateY(0)";

    });

});


// =========================================
// ABRIR PROGRAMAÇÃO
// =========================================

btnProgramacao.addEventListener("click", () => {

    // A capa desaparece gradativamente
    telaInicial.style.opacity = "0";
    telaInicial.style.transform = "translateY(-10px)";

    setTimeout(() => {

        // Esconde a capa
        telaInicial.style.display = "none";

        // Prepara a programação para entrar
        telaProgramacao.style.opacity = "0";
        telaProgramacao.style.transform = "translateY(10px)";
        telaProgramacao.style.display = "block";

        // Volta para o topo
        window.scrollTo(0, 0);

        // Força o navegador a registrar o estado inicial
        telaProgramacao.offsetHeight;

        // Inicia a entrada suave da programação
        telaProgramacao.style.opacity = "1";
        telaProgramacao.style.transform = "translateY(0)";

    }, 450);

});


// =========================================
// VOLTAR PARA A CAPA
// =========================================

btnVoltar.addEventListener("click", () => {

    // A programação desaparece gradativamente
    telaProgramacao.style.opacity = "0";
    telaProgramacao.style.transform = "translateY(-10px)";

    setTimeout(() => {

        // Esconde a programação
        telaProgramacao.style.display = "none";

        // Prepara a capa para entrar
        telaInicial.style.opacity = "0";
        telaInicial.style.transform = "translateY(10px)";
        telaInicial.style.display = "flex";

        // Volta para o topo
        window.scrollTo(0, 0);

        // Força o navegador a registrar o estado inicial
        telaInicial.offsetHeight;

        // Inicia a entrada suave da capa
        telaInicial.style.opacity = "1";
        telaInicial.style.transform = "translateY(0)";

    }, 450);

});