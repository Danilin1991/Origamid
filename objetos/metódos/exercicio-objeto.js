// crie um objeto com os seus dados pessoais

var pessoa = {
	nome: "Danilo",
	sobrenome: "Pereira",
	idade: 32,
};
console.log(pessoa.nome);

// crie um método no objeto anterior ,que mostre o nome completo.
pessoa.nomeCompleto = function () {
	return `${this.nome} ${this.sobrenome}`;
};
console.log(pessoa.nomeCompleto());

// modifique o valor da propriedade preco para 3000

var carro = {
	preco: 1000,
	portas: 4,
	marca: "audi",
};

carro.preco = 3000;
console.log(carro);

// crie um objeto de um cachorro que represente um labrador , preto com 10 anos de idade, que late ao ver um homem

var cachorro = {
	cor: "preto",
	idade: 10,
	raça: "labrador",
	latir(pessoa) {
		if (pessoa === "homem") {
			return "Latir";
		} else {
			return "Nada";
		}
	},
};
console.log(cachorro.latir("homem"));
