// Arrow functions

const helloWorld = function() {
    return "Hello World";
}

const helloWorld = () => {
    return "Hello World";
}

const helloWorld = () => "Hello World";

console.log(helloWorld());

// Caso exista apenas uma linha, pode dispensar as chaves e o return
const soma = (a, b) => a + b;

console.log(soma(4, 6)); // 10

// Caso exista apenas um parâmetro, pode dispensar os parênteses
const soma = a => a;

console.log(soma(4)); // 4