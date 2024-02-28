// métodos : é uma propriedade que contém uma função no local do seu valor

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado
  },
  perimetro: function (lado) {
    return this.lados * lado
  }
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

console.log(quadrado.area(5)); //  esse numero 5 é jogado na função area e logo em seguida é feito o calculo 5 x 5 que resulta em 25 

