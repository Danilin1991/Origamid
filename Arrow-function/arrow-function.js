/* argumentos e parenteses */

// argumento unico não precisa de parenteses
// const imgs = document.querySelectorAll("img");
// imgs.forEach(item => {
//   console.log(item);
// });

// // multiplos argumentos precisam de parenteses
// imgs.forEach((item, index) => {
//   console.log(item, index);
// })

// // sem argumentos precisa dos parenteses,mesmo vazio

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// })

let i = 0;
imgs.forEach(() => console.log(i++))