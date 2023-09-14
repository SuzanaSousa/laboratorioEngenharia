class Calculadora{
    constructor(){
        this.operacao;
        this.visor;
        this.status;
    }
   
}

 const lista = Array.from(document.getElementsByClassName('numeros'));
/*const visor = document.createElement('input');
    visor.type = 'text';
    visor.classList.add('visor');
    calculadoraDiv.appendChild(visor);
             */
const botoes =[
       '7','8','9', '/',
       '4','5','6', '*',
       '1', '2', '3','-',
       '0', '.','=', '+',
];
const calculadora =document.createElement('div');
calculadora.id = 'calculadora';

botoes.forEach(botao => {
    const btn = document.createElement('button');
    btn.textContent = botao;
    btn.addEventListener('click',()=>{
        if(botao ==='='){
            calcular();

        }else{
            visor.value+= botao;
        }
        calculadora.appendChild(btn);
    });

});
function calcular(){
    try{
        visor.value = eval(visor.value);
    }catch (error){
        visor.value ="erro";
    }
}
const calculadora =  new Calculadora
calculadoraDiv.appendChild(calculadora);

            
       