/*  parametros do forEach :o primeiro parametro é o callback , ou seja ,a função que vai ser executada para cada item. esse pode receber tres parametros : valoratual , indice e array.*/

const imgs = document.querySelectorAll("img"); // selecionando todos os elementos img na tela (img);
imgs.forEach(function (item, index, array) {
	console.log(item, index, array);
});
/* arrow function : sintaxe curta em relação a function expression.
basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.*/

 /*
const titulosarray = document.querySelectorAll(".titulo");
titulosarray.forEach((item, index, array) => {
	console.log(item, index, array);
});*/

// forEach e array : forEach é um método de array alguns objetos array-like possuem este metodo.caso não possua,o ideal é transforma-los em uma array.

const titulos = document.getElementsByClassName("titulo");
const titulosarray = Array.from(titulos); //.from transforma um array-like em um array

titulosarray.forEach(function (item, index, array) {
	console.log(item, index, array);
});
