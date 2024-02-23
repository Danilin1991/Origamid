function somar(n1, n2) {
	return n1 + n2;
}
console.log(somar(2, 3));

function imc(peso, altura) {
	const imc = peso / altura ** 2;
	return imc;
}
console.log(imc(70, 1.75));

function pi() {
	return 3.14;
}
console.log(pi());

var total = 5 * pi();
console.log(total);

// parenteses executam uma função

/* parenteses executam uma função

se apenas definirmos a função com o function e não executarmos a mesma ,nada que estiver dentro dela irá acontecer
*/

function corFavorita(cor) {
	if (cor === "azul") {
		return "Olhe para o ceu";
	} else if (cor === "amarelo") {
		return "Olhe para o sol";
	} else {
		return "Feche os olhos";
	}
} var cor = corFavorita("amarelo");
console.log(cor);
