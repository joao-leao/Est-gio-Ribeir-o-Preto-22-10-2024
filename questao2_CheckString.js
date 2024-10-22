// Função que verifica a existência da letra e conta quantas vezes aparece na frase
function verificarLetra(letra, frase) {
    // Converte a frase e a letra para minúsculas para evitar distinção entre maiúsculas e minúsculas
    let letraMinuscula = letra.toLowerCase();
    let fraseMinuscula = frase.toLowerCase();

    // Contador para a letra
    let contagem = 0;

    // Percorre a frase para verificar a quantidade de vezes que a letra aparece
    for (let i = 0; i < fraseMinuscula.length; i++) {
        if (fraseMinuscula[i] === letraMinuscula) {
            contagem++;
        }
    }

    // Exibe o resultado
    if (contagem > 0) {
        console.log(`A letra '${letra}' aparece ${contagem} vez(es) na frase.`);
    } else {
        console.log(`A letra '${letra}' não foi encontrada na frase.`);
    }
}

// Exemplo de uso:
let letra = "a"
let frase = "Exemplo de frase"

verificarLetra(letra, frase);
