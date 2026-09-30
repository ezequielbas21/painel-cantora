// =========================================
// ELEMENTOS
// =========================================

const telaInicial = document.getElementById("tela-inicial");
const telaProgramacao = document.getElementById("tela-programacao");
const telaCerimonia = document.getElementById("tela-cerimonia");

const btnProgramacao = document.getElementById("btn-programacao");
const btnVoltar = document.getElementById("btn-voltar");
const btnPlaylist = document.getElementById("btn-playlist");

const btnCerimonia = document.getElementById("btn-cerimonia");
const btnSairCerimonia = document.getElementById("btn-sair-cerimonia");

const btnAnterior = document.getElementById("btn-anterior");
const btnProximo = document.getElementById("btn-proximo");


// =========================================
// CONFIGURAÇÃO INICIAL
// =========================================

telaInicial.style.opacity = "0";
telaInicial.style.transform = "translateY(10px)";

telaProgramacao.style.display = "none";
telaCerimonia.style.display = "none";


// =========================================
// ENTRADA INICIAL
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

    telaInicial.style.opacity = "0";
    telaInicial.style.transform = "translateY(-10px)";

    setTimeout(() => {

        telaInicial.style.display = "none";

        telaProgramacao.style.opacity = "0";
        telaProgramacao.style.transform = "translateY(10px)";
        telaProgramacao.style.display = "block";

        window.scrollTo(0, 0);

        telaProgramacao.offsetHeight;

        telaProgramacao.style.opacity = "1";
        telaProgramacao.style.transform = "translateY(0)";

    }, 450);

});


// =========================================
// VOLTAR PARA A CAPA
// =========================================

btnVoltar.addEventListener("click", () => {

    telaProgramacao.style.opacity = "0";
    telaProgramacao.style.transform = "translateY(-10px)";

    setTimeout(() => {

        telaProgramacao.style.display = "none";

        telaInicial.style.opacity = "0";
        telaInicial.style.transform = "translateY(10px)";
        telaInicial.style.display = "flex";

        window.scrollTo(0, 0);

        telaInicial.offsetHeight;

        telaInicial.style.opacity = "1";
        telaInicial.style.transform = "translateY(0)";

    }, 450);

});


// =========================================
// PLAYLIST DE ENSAIO
// =========================================

btnPlaylist.addEventListener("click", () => {

    window.open(
        "https://youtube.com/playlist?list=PLbcqhNL-9KJg&si=I40nooKkxGTsRGYF",
        "_blank"
    );

});


// =========================================
// DADOS DA CERIMÔNIA
// =========================================

const momentosCerimonia = [

    {
        numero: "01",
        titulo: "Entrada da Bíblia",
        musica: "Deus Está Aqui",
        trecho: "1º verso"
    },

    {
        numero: "02",
        titulo: "Entrada dos Padrinhos",
        musica: "Me Ama",
        trecho: "Até todos os padrinhos entrarem"
    },

    {
        numero: "03",
        titulo: "Entrada do Noivo",
        musica: "Só Tu És Santo",
        trecho: "1º verso + pré-refrão"
    },

    {
        numero: "04",
        titulo: "Entrada das Damas e Pajens",
        musica: "Amor do Nosso Deus",
        trecho: "1ª parte + pré-refrão"
    },

    {
        numero: "05",
        titulo: "Entrada da Noiva",
        musica: "Marcha Nupcial + Pra Ti Eu Vou",
        trecho: "Ponte + refrão"
    },

    {
        numero: "06",
        titulo: "Momento de Louvor",
        musica: "Medley — Consagração + Pra Te Adorar",
        trecho: "Arranjo original"
    },

    {
        numero: "07",
        titulo: "Entrada das Alianças",
        musica: "Tu És",
        trecho: "Refrão"
    },

    {
        numero: "08",
        titulo: "Votos",
        musica: "A Thousand Years",
        trecho: "Instrumental completa"
    },

    {
        numero: "09",
        titulo: "Momento do Beijo",
        musica: "Nós Dois",
        trecho: "Refrão"
    },

    {
        numero: "10",
        titulo: "Assinaturas",
        musica: "Casa de Benção",
        trecho: "1º verso + pré-refrão + refrão"
    },

    {
        numero: "11",
        titulo: "Saída",
        musica: "Te Agradeço — Preto no Branco",
        trecho: "Música completa"
    }

];


// =========================================
// ELEMENTOS INTERNOS DO MODO CERIMÔNIA
// =========================================

const contadorCerimonia =
    document.querySelector(".contador-cerimonia");

const tituloMomentoAtual =
    document.querySelector(".titulo-momento-atual");

const musicaAtual =
    document.querySelector(".musica-atual");

const proximoTitulo =
    document.querySelector(".proximo-titulo");

const proximoMusica =
    document.querySelector(".proximo-musica");


// =========================================
// MOMENTO ATUAL
// =========================================

let momentoAtual = 0;


// =========================================
// CONTROLE DA TRANSIÇÃO
// =========================================

let transicaoMomentoEmAndamento = false;


// =========================================
// ATUALIZAR MODO CERIMÔNIA
// =========================================

function atualizarCerimonia() {

    const atual = momentosCerimonia[momentoAtual];


    // -----------------------------------------
    // MOMENTO ATUAL
    // -----------------------------------------

    tituloMomentoAtual.textContent =
        atual.titulo;

    musicaAtual.textContent =
        atual.musica;

    contadorCerimonia.textContent =
        `${atual.numero} / ${momentosCerimonia.length}`;


    // -----------------------------------------
    // LETRA DO MOMENTO ATUAL
    // -----------------------------------------

    const conteudoLetra =
        document.getElementById("conteudo-letra");

    if (conteudoLetra) {

        const letra =
            letrasCerimonia[atual.numero];


        // Remove comentários HTML antes de verificar
        // se existe conteúdo visível

        const letraVisivel = letra
            ? letra.replace(/<!--[\s\S]*?-->/g, "").trim()
            : "";


        if (letraVisivel !== "") {

            conteudoLetra.innerHTML = letra;

        } else {

            conteudoLetra.innerHTML = `
                <p class="letra-indisponivel">
                    Conteúdo deste momento ainda não foi inserido.
                </p>
            `;

        }


        // Sempre começa a letra pelo topo

        conteudoLetra.scrollTop = 0;

    }


    // -----------------------------------------
    // PRÓXIMO MOMENTO
    // -----------------------------------------

    if (
        momentoAtual <
        momentosCerimonia.length - 1
    ) {

        const proximo =
            momentosCerimonia[momentoAtual + 1];

        proximoTitulo.textContent =
            `${proximo.numero} — ${proximo.titulo}`;

        proximoMusica.textContent =
            proximo.musica;

    } else {

        proximoTitulo.textContent =
            "Fim da cerimônia";

        proximoMusica.textContent =
            "Laryssa & José";

    }

}


// =========================================
// ABRIR MODO CERIMÔNIA
// =========================================

btnCerimonia.addEventListener("click", () => {

    // Garante que nenhuma transição anterior
    // esteja presa

    transicaoMomentoEmAndamento = false;


    // Sempre começa pelo primeiro momento

    momentoAtual = 0;

    atualizarCerimonia();


    // Fecha visualmente a capa

    telaInicial.style.opacity = "0";
    telaInicial.style.transform =
        "translateY(-10px)";


    setTimeout(() => {

        // Esconde a capa

        telaInicial.style.display = "none";


        // Prepara a tela da cerimônia

        telaCerimonia.style.display = "flex";
        telaCerimonia.style.opacity = "0";
        telaCerimonia.style.transform =
            "translateY(18px)";


        window.scrollTo(0, 0);


        // Força o navegador a registrar
        // o estado inicial

        telaCerimonia.offsetHeight;


        // Entrada suave

        requestAnimationFrame(() => {

            telaCerimonia.style.opacity = "1";
            telaCerimonia.style.transform =
                "translateY(0)";

        });

    }, 450);

});


// =========================================
// PRÓXIMO MOMENTO
// =========================================

btnProximo.addEventListener("click", () => {

    // Impede cliques múltiplos durante
    // a pequena transição

    if (transicaoMomentoEmAndamento) {
        return;
    }


    // Já estamos no último momento

    if (
        momentoAtual >=
        momentosCerimonia.length - 1
    ) {

        alert(
            "A cerimônia já chegou ao final."
        );

        return;

    }


    transicaoMomentoEmAndamento = true;


    // Inicia a transição rápida

    telaCerimonia.classList.add(
        "transicionando-momento"
    );


    setTimeout(() => {

        // Avança APENAS UM momento

        momentoAtual++;


        atualizarCerimonia();


        window.scrollTo(0, 0);


        // Retorna o conteúdo

        requestAnimationFrame(() => {

            telaCerimonia.classList.remove(
                "transicionando-momento"
            );


            // Libera o próximo clique

            transicaoMomentoEmAndamento = false;

        });

    }, 180);

});


// =========================================
// MOMENTO ANTERIOR
// =========================================

btnAnterior.addEventListener("click", () => {

    // Impede cliques múltiplos durante
    // a pequena transição
    if (transicaoMomentoEmAndamento) {
        return;
    }


    // Se já estiver no primeiro momento,
    // não faz nada
    if (momentoAtual <= 0) {
        return;
    }


    // Bloqueia novos cliques durante a transição
    transicaoMomentoEmAndamento = true;


    // Inicia a transição rápida
    telaCerimonia.classList.add(
        "transicionando-momento"
    );


    setTimeout(() => {

        // Volta APENAS UM momento
        momentoAtual--;


        // Atualiza título, música, letra
        // e próximo momento
        atualizarCerimonia();


        window.scrollTo(0, 0);


        // Mostra o conteúdo novamente
        requestAnimationFrame(() => {

            telaCerimonia.classList.remove(
                "transicionando-momento"
            );


            // Libera o botão
            transicaoMomentoEmAndamento = false;

        });

    }, 180);

});


// =========================================
// SAIR DO MODO CERIMÔNIA
// =========================================

btnSairCerimonia.addEventListener("click", () => {

    // Anima a cerimônia para fora

    telaCerimonia.style.opacity = "0";
    telaCerimonia.style.transform =
        "translateY(-18px)";


    setTimeout(() => {

        // Esconde a cerimônia

        telaCerimonia.style.display = "none";


        // Reseta o estado visual

        telaCerimonia.style.opacity = "0";
        telaCerimonia.style.transform =
            "translateY(18px)";


        // Reseta a transição interna

        telaCerimonia.classList.remove(
            "transicionando-momento"
        );

        transicaoMomentoEmAndamento = false;


        // Prepara a capa

        telaInicial.style.opacity = "0";
        telaInicial.style.transform =
            "translateY(10px)";
        telaInicial.style.display = "flex";


        window.scrollTo(0, 0);


        // Força o navegador a registrar
        // o estado inicial

        telaInicial.offsetHeight;


        // Entrada suave da capa

        requestAnimationFrame(() => {

            telaInicial.style.opacity = "1";
            telaInicial.style.transform =
                "translateY(0)";

        });

    }, 500);

});