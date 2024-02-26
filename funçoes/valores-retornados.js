/* valores retornados
uma função pode retornar qualquer tipo de dado e até outras funções



*/

function terceiraIdade(idade) {
	if (typeof idade !== "number") {
		return "informe a sua idade.";
	} else if (idade >= 60) {
		return true;
	} else {
		return false;
	}
}
console.log(terceiraIdade(60));
console.log(terceiraIdade(15));
console.log(terceiraIdade(65));
