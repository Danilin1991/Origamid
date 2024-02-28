// Palavra Chave This : This irá fazer refencia ao próprio objeto .

var height = 120;
var menu = {
	width: 800,
	height: 50,
	metadeHeight() {
		return this.height / 2;
	},
};

menu.metadeHeight(); // 25

// sem o this, seria 60

//this irá retornar o próprio objeto
