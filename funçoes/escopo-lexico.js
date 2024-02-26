/* Escopo Léxico 

funçoes conseguem acessar variáveis que foram criadas no contexto pai */

var profissao = "programador";
function dados() {
	var name = "danilo";
	var idade = 32;
	function outrosDados() {
		var endereco = "rua dos bobos";
		var idade = 32;
		return `&{name}, {idade}, {endereco}`;
	}
	return outrosDados();
}
console.log(dados)(); // retorna 'danilo', 32, 'rua dos bobos'

outrosDados(); // retorna um erro
