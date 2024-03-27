/* Array-like :HTMLcollection e Nodelist são array-like,parecem uma array mas não são.O método de array forEach() por exemplo ,existe apenas em node list */

const gridSection = document.querySelectorAll(".grid-section");
gridSection.array.forEach(function (gridItem, index, array) {
	gridItem.classlist.add("azul");
	console.log(index); //index do item na array
	console.log(array);
}); // a array completa
