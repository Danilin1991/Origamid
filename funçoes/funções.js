/* Funções e o que são? bloco de código que pode ser executado e reutilizado .
valores podem ser passados por uma função e a mesma retorna outro valor.*/

function areaQuadrado(lado) {
	return lado * lado;
}

areaQuadrado(100); // 10000

areaQuadrado(5); // 25

areaQuadrado(2); // 4


// chamada de function e declaration

/* parametros e argumentos
ao criar  uma função voce pode definir parametros ,ao executar uma função ,você pode passar argumentos
*/

//peso e altura são os parametros
function imc(peso, altura) {
	const imc = peso / altura ** 2;
	return imc;
}

imc(80, 1.8); // 0 e 1.80 sao argumentos

imc(60, 1.6); // 60 e 1.60 sao argumentos

// separar por virgula cada parametro .você pode definir mais de um parametro ou nenhum tambem.
