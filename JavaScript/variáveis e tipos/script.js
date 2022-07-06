const { doesNotThrow } = require("assert");

// Var e Let
var a = 1;
var b = 2;

if (a === 1) {
    var a = 11; // the scope is global
    var b = 22; // the scope is inside the if-block

    console.log(a); // 11
    console.log(b); // 22
}

console.log(a); // 11
console.log(b); //2

// Hoisting
numberOne = 1;

console.log(numberOne + 2);

var numberOne;

// var e let
var firstName = 'João';
var lastName = 'Souza';

if (firstName === 'João') {
    var firstName = 'Pedro';
    let lastName = 'Silva';
}

console.log(firstName, lastName);

// Const
const FIRST_NAME = 'Stephany';

// Template String
let nome = 'João';
let sobrenome = 'Pedro';
concatenado = `${nome} ${sobrenome}`

console.log(concatenado);

// Split, includes, startsWith, endsWith
let frase = 'Olá, tudo bem ?'

console.log(frase.split(""));
console.log(frase.split(" "));
console.log(frase.includes("tudo"));
console.log(frase.startsWith("O"));
console.log(frase.endsWith("?"));

// Vetores ou arrays
let array = []

array.push(3, 4, 5, 6);
console.log(array);

array.push(2);
console.log(array);

array.pop(2);
console.log(array);

array.shift(3);
console.log(array);

array.unshift(3);
console.log(array);

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Objetos
let obj = {}

obj.name = 'Julia'
console.log(obj)
obj.age = 18
console.log(obj)

console.log(Object.values(obj));
console.log(Object.keys(obj));

let person = {
    name: "Julia",
    age: 20,
    adress: "Rua 2"
}

console.log(person);
// formas de criar chaves
person.lastName = "Oliveira"
person["numberOfSiblings"] = 3

console.log(person);


