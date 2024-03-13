/*   escopo de função : variaveis declaradas dentro de funções não são acessadas fora das mesmas */

function mostrarCarro() {
	var carro = "fusca";
	console.log(carro);
}

mostrarCarro(); // fusca
console.log(carro); // ReferenceError: carro is not defined

// escopo evita o conflito de nomes
