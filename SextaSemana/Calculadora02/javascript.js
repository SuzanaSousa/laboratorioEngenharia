// Obtém a referência à div da calculadora
const calculadoraDiv = document.getElementById('calculadora');

// Cria a estrutura da calculadora
const calculadora = document.createElement('div');
calculadora.classList.add('calculadora');

// Cria os elementos da calculadora (botões, visor, etc.)
const visor = document.createElement('input');
visor.type = 'text';
visor.classList.add('visor');
calculadora.appendChild(visor);

const botoes = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-', 'AC',
    '0', '.', '=', '+', '+/-'
];

botoes.forEach(botao => {
    const btn = document.createElement('button');
    btn.textContent = botao;
    btn.addEventListener('click', () => {
        // Lógica para tratar os cliques nos botões
        if (botao === '=') {
            // Realize o cálculo e exiba o resultado no visor
            visor.value = eval(visor.value);
        } else {
            // Adicione o valor do botão ao visor
            visor.value += botao;
        }
    });
    calculadora.appendChild(btn);
});



// Adiciona a calculadora à div principal
calculadoraDiv.appendChild(calculadora);