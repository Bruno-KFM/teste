let numerosSorteados = [];
let limite = 3;
let numeroSecreto = geradorDeNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;

function exibirTextoNaTela(ref, texto) {
    let campo = document.querySelector(ref);
    campo.innerHTML = texto;
}

function mesagemInicail() {
    exibirTextoNaTela('h1', 'Bem vindo ao jogo do número secreto!!!');
    exibirTextoNaTela('p', 'escolha um número entre 1 e 10');
}

mesagemInicail();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'ACERTOU!!!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor.');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior.');
    }
    tentativas++;
    limparCampo();
}

function geradorDeNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limite + 1);

    if (numerosSorteados.length == limite) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido)) {
        return geradorDeNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    console.log('o botão funciona');
    mesagemInicail();
    numeroSecreto = geradorDeNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}