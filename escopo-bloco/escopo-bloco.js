/* escopo de bloco : variáveis criadas com var ,vazam o bloco .por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.*/

if (true) {
	var carro = "fusca";
	console.log(carro);
}
console.log(carro);
