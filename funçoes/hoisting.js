/* Hoisting 

Antes de executar uma função  o JS 'move' todas as funções declaradas para a memória  */

imc(80, 1.8); // retorna o imc

function imc(peso, altura) {
	const imc = peso / altura ** 2;
	console.log(imc);
}
