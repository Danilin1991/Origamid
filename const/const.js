/* const : mantém o escopo no bloco,impede a redeclação de variáveis e evita o conflito de nomes. */

const mes = "dezembro";
// mes = 'janeiro '  erro,tentou modificar a const.
// const semana;  erro, const sem valor.

const data = {
	dia: 28,
	mes: "dezembro",
	ano: 2024,
};
data.dia = "28 "; // funciona
data = "janeiro"; // erro, tentou modificar a const.
