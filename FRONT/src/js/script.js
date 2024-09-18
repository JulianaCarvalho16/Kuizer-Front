let perguntas = document.querySelectorAll('.pergunta');
let numerosPerguntas = document.querySelectorAll('.nump li');
let perguntaAtual = 0;
let pontuacao = 0;

function mostrarPontuacao() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.endGame').style.display = 'block';
    document.getElementById('pontuacao-valor').textContent = pontuacao;
}

function recomecarQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;
    mostrarPerguntas(perguntaAtual);
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.endGame').style.display = 'none';
    document.querySelectorAll('.pergunta input[type="button"]').forEach(botao => {
        botao.style.backgroundColor = '';
        botao.disabled = false;
    });
}

function mostrarPerguntas(numero) {
    if (numero >= perguntas.length) {
        mostrarPontuacao();
        return;
    }

    perguntas.forEach((pergunta, index) => {
        if (index === numero) {
            pergunta.style.display = 'block';
            numerosPerguntas[index].classList.add('atual');
        } else {
            pergunta.style.display = 'none';
            if (numerosPerguntas[index].classList.contains('atual')) {
                numerosPerguntas[index].classList.remove('atual');
                numerosPerguntas[index].classList.add('anterior');
            }
        }
    });
}

function verificarResposta(respostaSelecionada) {
    let perguntaAtualElement = perguntas[perguntaAtual];
    let botoesResposta = perguntaAtualElement.querySelectorAll('.botoes input[type="button"]');

    botoesResposta.forEach(botao => {
        if (botao.classList.contains('c')) {
            if (botao.value === respostaSelecionada) {
                botao.style.backgroundColor = 'green';
                pontuacao++;
            }
        } else if (botao.classList.contains('e')) {
            if (botao.value === respostaSelecionada) {
                botao.style.backgroundColor = 'red';
            }
        }
        botao.disabled = true;
    });

    perguntaAtualElement.querySelectorAll('.botoes .c').forEach(botao => {
        botao.style.backgroundColor = 'green';
    });

    perguntaAtualElement.querySelectorAll('.botoes .e').forEach(botao => {
        if (botao.value !== respostaSelecionada) {
            botao.style.backgroundColor = 'red';
        }
    });

    setTimeout(() => {
        mostrarPerguntas(++perguntaAtual);
    }, 1500);
}

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', (evento) => {
        if (evento.target.tagName === 'INPUT') {
            const respostaSelecionada = evento.target.value;
            verificarResposta(respostaSelecionada);
        }
    });
});

mostrarPerguntas(perguntaAtual);