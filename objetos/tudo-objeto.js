// Tudo é objeto : Strings,boolean,objetos e mais ,possuem propriedades e metódos. por isso sao objetos.

var nome = "danilo";
nome.length; // 6
nome.charAt(5); // o
nome.replace("d", "D"); // 'Danilo'
nome; // 'danilo'

// uma string herda propriedades e metódos do cosntrutor String ()

// numeros

var altura = 1.8;
altura.toFixed(); // '1.8'
altura.toString(); // '1.8'

// por um breve  momento o numero é envolvido em um objeto (coerção), tendo acesso assim as suas propriedades e metódos

// funções

function areaQuadrado(lado) {
	return lado * lado;
}

areaQuadrado.toString(); // function areaQuadrado(lado)"

areaQuadrado.length; // 1
