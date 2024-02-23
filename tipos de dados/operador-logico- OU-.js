/*
operador logico || (OU)

compara se uma expressão e a outra e verdadeira

true || true // true
true || false // true
false || true // true
'Gato' || 'Cão' // 'Gato'
(5 - 5) || (5 + 5) // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 5) // true

retorna o primeiro valor true que encontrar
*/
var condicional12 = 5 - 5 || 5 - 5 || 10 - 2;
console.log(condicional12);
