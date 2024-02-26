// crie uma função para verificar se um valor é truthy

function isTruthy(x) {
	if (!!true) {
		return true;
	}
}
isTruthy(10);
console.log(isTruthy(10));

// crie uma função matematica que retorne o perimetro de um quadrado

function areaQuadrado(lado) {
	return lado * 4;
}
areaQuadrado(10);
console.log(areaQuadrado(10));
// lembrando : perimetro é a soma dos quatro lados do quadrado

// crie uma função que verifica se um numero é par

function par(num) {
	if (num % 2 === 0) {
		return "e par";
	}
}

// crie uma função que retorne o tipo de dado do argumento passado (typeof)

function tipoDado(dado) {
	return typeof dado;
}
console.log(tipoDado(10));

// addEventlistener é uma função nativa do JS, o primeiro parametro é o evento  que ocorre e o segundo o callback

// utilize essa função para mostrar no console o seu nome completo quando o evento 'click' ocorrer
addEventListener("click", function () {
	console.log("Danilo Pereira");
});
