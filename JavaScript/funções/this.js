// This é uma referência de contexto
// No exemplo, this refere-se ao objeto pessoa

const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

console.log(pessoa.fullName()); // "André Soares"

console.log(pessoa.getId()); // 1

const person = {
    firstName: "Diego",
    lastName: "Vieira",
    getFullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    },
};
console.log(person.getFullName());

// Método Call 

const pessoa1 = {
    nome: 'Miguel'
};

const animal = {
    nome: "Murphy",
};

function getSomething() {
    console.log(this.nome);
}

console.log(getSomething.call(pessoa1));

// É possível passar parâmetros para essa função separando-os por vírgulas

const myObj = {
    num1: 2,
    num2: 4
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

console.log(soma.call(myObj, 1, 5)); // 12


// Método Apply (é possível passar parâmetros para essa função dentro de um array)

const pessoa2 = {
    nome: 'Miguel'
};

const animal2 = {
    nome: "Godi",
};

function getSomething() {
    console.log(this.nome);
}

console.log(getSomething.apply(pessoa2));

const myObj1 = {
    num1: 2,
    num2: 4
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

console.log(soma.apply(myObj1, [1, 5])); // 12


// Método Bind: clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro

const retornaNomes = function() {
    return this.nome;
};

let bruno = retornaNomes.bind({ nome: 'Bruno'});

console.log(bruno()); // Bruno

