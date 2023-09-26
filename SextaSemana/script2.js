// Obtém a referência à div da calculadora
const calculadoraDiv = document.getElementById('calculadora');

// Cria a estrutura da calculadora
const calculadora = document.createElement('div');
calculadora.classList.add('calculadora');


// Cria os elementos da calculadora (botões, visor, etc.)
const visor = document.createElement('input');
visor.type = 'text';
visor.classList.add('visor');
visor.classList.add('visor-centro'); // Adicione a classe "visor-centro" ao visor
calculadora.appendChild(visor);

const botoes = [
    'C',' +/-','%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
     '0', '.', '=','←',
];

botoes.forEach(botao => {
    const btn = document.createElement('button');
    btn.textContent = botao;
    btn.addEventListener('click', () => {
        // Lógica para tratar os cliques nos botões
        if (botao === '=') {
            // Realize o cálculo e exiba o resultado no visor
           visor.value = eval(visor.value);
        } else if (botao === 'C') {
            // Limpe o visor
            visor.value = '';
        
        }else if (botao === '+/-') {
            // Inverter o sinal do número no visor
            const valorAtual = parseFloat(visor.value) * -1;
            visor.value = -valorAtual;
        
        }else if (botao === '%') {
            // Calcular a porcentagem (dividir o valor atual por 100)
            visor.value = eval(visor.value + '/ 100');
        } else if (botao === '←') {
            // Remove o último caractere do visor
            visor.value = visor.value.slice(0, -1);
        }else {
            // Adicione o valor do botão ao visor
            visor.value += botao;  
        }
    });
    calculadora.appendChild(btn);
});

// Adiciona a calculadora à div principal
calculadoraDiv.appendChild(calculadora);