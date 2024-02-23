// verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 28;
var idademae = 52;
if (minhaIdade > idademae) {
	console.log("É maior");
} else {
	console.log("É menor");
}

// qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

// verifique se as seguintes variaveis sao truthy ou falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
	!!nome,
	!!idade,
	!!possuiDoutorado,
	!!empregoFuturo,
	!!dinheiroNaConta
);

// compare o total de habitantes do canada e brasil (valor em milhoes)
var brasil = 206;
var canada = 215;

if (brasil > canada) {
	console.log("Brasil tem mais habitantes");
} else {
	console.log("Canada tem mais habitantes");
}

// o que ira aparecer no console ?
if ("Gato" === "gato" && 5 > 2) {
	console.log("Verdadeiro");
} else {
	console.log("Falso");
}

// o que ira aparecer no console ?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
