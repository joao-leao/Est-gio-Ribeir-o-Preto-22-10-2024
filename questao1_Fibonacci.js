//declarando variaveis para controle
let num1 = 0
let num2 = 1
let num3 = 0
let fibonacci  = []

//inserindo os 2 primeiros valores na sequência para poder fazer os calculos seguintes
fibonacci.push(num1)
fibonacci.push(num2)

//Função que gera a sequência fibonacci com base no numero informado, a função tem que ter um numero como base para parar o laço de repetição se não acontece um loop infinito.
function geratorFibonacci(n){
    while (fibonacci[fibonacci.length - 1] < n) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
    }
    return fibonacci
}
//Função que verifica o numero informado por parametro se existe na sequência fibonacci
function checkNumberFibonacci(n){
    const genFibonacci = geratorFibonacci(n)
    if (genFibonacci.includes(n)) {
        return `O número ${n} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${n} não pertence à sequência de Fibonacci.`;
    }
}

//Inserido o numero para verificação, se existe na sequência fibonacci
const numero = 500

//Exibindo no console
console.log(checkNumberFibonacci(numero))