// Elementos DOM : praticamente todos os efeitos com js são feitos utilizando propriedades e metodos de objetos DOM.

<a class="btn">clique</a>;

var btn = document.querySelector(".btn");
btn.classList.add("azul");
console.log(btn.innerText); // "clique";
btn.addEventListener("click", function () {
	console.log("Clicou");
});
