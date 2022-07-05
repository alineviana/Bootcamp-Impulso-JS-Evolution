//******Variáveis e seus tipos******

// 1) Tipos primitivos

// Boolean
var vOuF = false;
console.log(typeof(vOuF));

// Number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// String
var nome = 'Aline';
console.log(typeof(nome));

// Function
var funcao = function() {}
console.log(typeof(funcao));

// Como declarar variáveis
var variavel = 'Aline';
variavel = 'Viana';
console.log(variavel);

let variavel2 = 'Aline';
variavel2 = 'Viana';
console.log(variavel2);

const constante = 'Aline';
console.log(constante)

// Escopo
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

// 2) Diferenças entre atribuição, comparação e comparação idêntica

// Atribuição
var atribuicao = 'Aline';

// Comparação
var comparacao = '0' == 0;
console.log(comparacao);

// Comparação idêntica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// 3) Operadores aritméticos, relacionais e lógicos

// 3.1) Aritméticos
// Adição
var adicao = 1 + 1;
console.log(adicao);

// Subtração
var subtracao = 2 - 1;
console.log(subtracao);

// Multiplicação
var multiplicacao = 2 * 2;
console.log(multiplicacao);

// Divisão real
var divisaoReal = 4 / 2;
console.log(divisaoReal);

// Divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

// 3.2) Relacionais
// > maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// < menor que
var menorQue = 5 < 2;
console.log(menorQue);

// >= maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// <= menor ou igual a
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

// 3.3) Lógicos
// && - "e" = considera que todos os valores sejam true
var e = true && false;
console.log(e);

// || - "ou" = considera que qualquer valor seja true
var ou = true || false;
console.log(ou);

// ! - "não" = inverte o valor de true para false ou vic-versa
var nao = !true;
console.log(nao);

// ***************************************************************************************

//******Vetores e Objetos******

// 1) Como declarar um array
let arrays = ['string', 1, true];
console.log(arrays);

// 1.1) Pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
console.log(array[0]);

// 2) Manipulando arrays
// 2.1) forEach() - itera um array
array.forEach(function(item, index){console.log(item, index)});

// 2.2) push() - add item no final do array
array.push('novo item');
console.log(array);

// 2.3) pop() - remove item no final do array
array.pop();
console.log(array);

// 2.4) shift() - remove item no início do array
array.shift();
console.log(array);

// 2.5) unshift() - add item no início do array
array.unshift('um novo item no início');
console.log(array)

// 2.6) indexOf() - retorna o índice de um valor
console.log(array.indexOf(true))

// 2.7) splice() - remove ou substitui um item pelo índice
array.splice(0, 3);
console.log(array);

// 2.8) slice() - retorna uma parte de array existente
let novoArray = array.slice(0, 3);
console.log(novoArray);

// 3) Objetos
let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}}
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno)

//***************************************************************************************

//******Estruturas condicionais******

// 1) If, else, else if
var jogador1 = 0;
var jogador2 = 0;
var placar;

// 1.1) If ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos');

if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!')
    placar = jogador1 > jogador2;

} else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou ponto')
    placar = jogador2 > jogador1
} else {
    console.log('Ninguém marcou ponto')
}

// 1.2) Switch case
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou');
}

// 2) Estruturas de repetição

// 2.1) For = executa uma instrução até que a condição seja atendida
let array = ['valor 1', 'valor 2', 'valor 3', 'valor 4', 'valor 5'];

let object = { propriedade1: 'valor 1', propriedade2: 'valor 2', propriedade3: 'valor 3'};

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

// 2.2) For/in = executa uma repetição a partir de uma propriedade
// com array
for (let i in array) {
    console.log(i);
}
// com object
for (i in object) {
    console.log(i);
}

// 2.3) For/of = executa a instrução a partir de um valor
for (i of array) {
    console.log(i);
}

// 2.4) While = executa uma instrução 'enquanto' determinada condição for verdadeira (a verificação é feita antes da execução)
// Essa instrução é usada quando não sabemos quantas vezes um bloco de instruções precisa ser repetido.
var a = 0;

while(a < 10) {
    a++;
    console.log(a);
}
// com o uso do do/while teremos os comandos executados ao menos uma única vez
do {
    a++;
    console.log(a);
} while (a <= 10)

//***************************************************************************************

//******Funções******
//Blocos de comandos e instruções para a execução de determinadas tarefas
function funcao() {
    console.log('Tudo certo!')
}

funcao();

// Funções com parâmetros
function mensagem(primeiro, segundo) {
    console.log(primeiro, segundo);
}

mensagem('Tudo', 'certo!');

//Aprofundando em funções
//Declarativas (nome da função é obrigatório)
function funcao() {
    console.log('Está é uma função declarativa');
}

funcao();

// Expressões de funções (funções atribuídas a expressões, nomeação das funções é opcional)
var funcao = function () {
    console.log('Sou uma mensagem de função de expressão');
}

funcao();

// Arrow function (são funções de expressão de sintaxe curta, sempre serão anônimas e não podem ser nomeadas)
// Deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}"

var funcao = () => {
    console.log('Sou uma Arrow Function')
}

funcao();