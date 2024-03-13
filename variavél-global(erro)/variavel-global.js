/* variavel global (  erro )
declarar variaveis sem a palavra chave var ou let, torna-se uma variavel global,isso é um erro !


*/

function mostrarCarro() {
  var carro = "fusca";
  console.log(carro);
}

mostrarCarro(); //fusca
console.log(carro); //fusca

// use 'strict' impede isso.