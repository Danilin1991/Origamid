// id :getElemntByid : seleciona e retorna elementos do DOM .

const animaisSection = document.getElementById("animais");

const contatoSection = document.getElementById("contato");

// retorna null caso não exista
const naExiste = document.getElementById("teste");

const gridSection = document.getElementsByClassName("grid-section");
console.log("grid-section");

const primeirali = document.querySelector("li");
console.log(primeirali);

const animaisimg = document.querySelectorAll(".animais img");
console.log(animaisimg[2]);

const gridSectionhtml = document.getElementsByClassName('grid-section');
const gridSectionnode = document.querySelector('.grid-section');
console.log(gridSection)
console.log(gridSectionnode)