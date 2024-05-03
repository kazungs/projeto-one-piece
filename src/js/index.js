/* Objetivo 1
    passo 1 - Pegar todos os botões do projeto
    passo 2 - monstrar o que o usuario clicou no objeto
    passo 3 - adicionar a classe selecionado e remover se tiver um existente

    Objetiuvo 2
        passo 1 - pegar todos os personagens do projeto
        passo 2 - monstrar o personagem que o usuario clicou no botão
        passo 3 - o mesmo que o passo 3 do objetivo 1
*/
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem")


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado")
    })
})

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

