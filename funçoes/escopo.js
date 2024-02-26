/*  Escopo 

variáveis e funções definidas dentro de um bloco {},não são visiveis fora dele.*/

function precisoVisitar(paisesVisitados) {
	var totalPaises = 193;
	return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}

console.log(precisoVisitar(30));
