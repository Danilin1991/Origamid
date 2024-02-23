/* 
Com o switch, podemos verificar se uma variavel é igual a diferentes valores utilizando o case .caso ela seja igual,você pode executar uma ação e utilizar a palavra chave break; para encerrar o switch. o valor default será executado caso nenhuma das condicoes seja atendida. */

var corFavorita = "azul";
switch (corFavorita) {
	case "vermelho":
		console.log("Olhe para o ceu.");
		break;
	case "azul":
		console.log("Olhe para o ceu.");
		break;
	case "amarelo":
		console.log("Olhe para o sol.");
		break;
	default:
		console.log("Feche os olhos.");
}
