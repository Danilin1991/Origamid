/**
 * pode ou não retornar um valor de uma função, quando não definimos o return,ela irá retornar o valor undefinide.o código interno da função é executado normalmente ,independente de existir ou não um return
 * 
 */

function imc (peso, altura) {
    const imc = peso / altura ** 2;
    console.log(imc);
}

imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined