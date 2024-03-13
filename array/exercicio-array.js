// crie uma array com os anos que o brasil ganhou a copa.

var brasil = [1959, 1962, 1970, 1994, 2002];
console.log(brasil[2]);

// Interaja com a array utilizando um loop, para mostrar na tela a seguinte mensagem " o brasil ganhou a copa de ${ano}"

var brasil = [1959, 1962, 1970, 1994, 2002];

for (var i = 0; i < brasil.length; i++) {
	console.log(`O brasil ganhou a copa de ${brasil[i]}`);
}

// interaja com um loop nas frutas abaixo e pare ao chegar em Pera

var frutas = ["Banana", "Maçã", "Pera", "Uva"];
for (var i = 0; i < frutas.length; i++) {
	if ("frutas"[i] === "Pera") {
		break;
	}
	console.log(frutas[i]);
}

// coloque a ultima fruta da array dentro de uma variável sem remover a mesma do array

var frutas = ["Banana", "Maçã", "Pera", "Uva"];
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
