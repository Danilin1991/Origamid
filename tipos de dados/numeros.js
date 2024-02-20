var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

var total = 10 + 5 + 10
var divisao = 200 / 5;
var modulo = 3872983892 % 3; 

console.log(modulo);

//operadores aritimeticos (string)
var soma = "100" + 50; // 10050
var subtracao = "100" - 50; // 50
var multiplicacao = "100" * '2'; // 200
var divisao = 'comprei 10' / 2; // Nan (NaN = not a number) é possivel verificar se uma variável é NaN usando o comando isNaN()

var testeNan = 'isso é 100' / 2;
console.log(isNaN(testeNan));

//NaN = not a number
var numero = 80;
var unidade = 'kg'
var peso = numero + unidade; // '80kg'
var pesoPordois = peso / 2; // NaN