/* argumentos podem ser funções
chamadas de callBack,geralmente são funções que ocorrem após algum evento.

funçoes anônimas são aquelas em que o nome da funcção não é definido,escritos como , function() {} ou () => {}
*/

addEventListener("click", function () {
	console.log("Clicou");
});

// A função possui dois argumentos
// primeiro é a string 'clicou'
// segundo é uma função anonima
