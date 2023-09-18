
// Variáveis para rastrear o histórico e os valores
let currentInput = '0';
let operator = '';
let history = '';

// Função para atualizar o visor
function updateDisplay() {
  document.getElementById('display').value = currentInput;
  document.getElementById('history').innerText = history;
}

// Função para adicionar um número ao visor
function add_numero(numero) {
  if (currentInput === '0' || currentInput === 'Erro') {
    currentInput = numero.toString();
  } else {
    currentInput += numero.toString();
  }
  updateDisplay();
}

// Função para adicionar um operador ao visor
function add_operador(op) {
  if (operator !== '') {
    total();
  }
  operator = op;
  history = currentInput + ' ' + op;
  currentInput = '0';
  updateDisplay();
}

// Função para realizar o cálculo
function total() {
  if (operator === '') {
    return;
  }
  const num1 = parseFloat(history);
  const num2 = parseFloat(currentInput);
  switch (operator) {
    case '+':
      currentInput = (num1 + num2).toString();
      break;
    case '-':
      currentInput = (num1 - num2).toString();
      break;
    case '*':
      currentInput = (num1 * num2).toString();
      break;
    case '/':
      if (num2 === 0) {
        currentInput = 'Erro';
      } else {
        currentInput = (num1 / num2).toString();
      }
      break;
      case '%':
        if (num1 !== '%') {
            currentInput = (num1 * (num2 / 100)).toString();
          }
        break;
       
  }
  operator = '';
  history = '';
  updateDisplay();
}

// Função para limpar o visor
function limpar() {
  currentInput = '0';
  operator = '';
  history = '';
  updateDisplay();
}
// Inicialize o visor
updateDisplay();
            
       