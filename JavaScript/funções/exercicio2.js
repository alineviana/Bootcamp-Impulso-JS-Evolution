// Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. 

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
}

const pessoa2 = {
    nome: "Carla",
    idade: 26
}

const animal = {
    nome: "Fiona",
    idade: 5
}

console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.apply(pessoa1, [30]));