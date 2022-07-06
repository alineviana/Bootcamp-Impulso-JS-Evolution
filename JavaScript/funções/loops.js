// // If/Else

// function numeroPositivo(num) {
//   let resultado;

//   if (num < 0) {
//     resultado = false;
//   } else {
//     resultado = true;
//   }
//   return resultado;
// }

// console.log(numeroPositivo(2)); // true

// console.log(numeroPositivo(-9)); // false

// function numeroPositivo(num) {
//   let resultado;

//   const ehNegativo = num < 0;

//   if (ehNegativo) {
//     resultado = false;
//   } else {
//     resultado = true;
//   }
//   return resultado;
// }

// console.log(numeroPositivo(-10));

// function numeroPositivo(num) {
//   const ehNegativo = num < 0;

//   if (ehNegativo) {
//     return false;
//   }
//   return true;
// }

// console.log(numeroPositivo(20));

// function numeroPositivo(num) {
//   const ehNegativo = num < 0;
//   const maiorQueDez = num > 10;

//   if (ehNegativo) {
//     return "Esse número é negativo!";
//   } else if (!ehNegativo && maiorQueDez) {
//     return "Esse número é positivo e maior que 10!";
//   }
//   return "Esse número é positivo!";
// }

// console.log(numeroPositivo(15));

// // Switch/case
// // Equivale a uma comparação de tipo e valor (===)
// // Sempre precisa de uma valor "default"
// // Ideal para quando se precisa comparar muitos valores

// function getAnimal(id) {
//   switch (id) {
//     case 1:
//       return "cão";
//     case 2:
//       return "gato";
//     case 3:
//       return "pássaro";
//     default:
//       return "peixe";
//   }
// }

// console.log(getAnimal(1)) // cão
// console.log(getAnimal(4)) // peixe
// console.log(getAnimal("1")) // peixe

// // For: loop dentro de elementos iteráveis (arrays, strings)

// function multiplicaPorDois(arr) {
//     let multiplicados = [];

//     for(let i = 0; i < arr.length; i++) {
//         multiplicados.push(arr[i] * 2);
//     }
//     return multiplicados;
// }

// const meusNumeros = [2, 33, 456, 356, 40];

// console.log(multiplicaPorDois(meusNumeros)); // [ 4, 66, 912, 712, 80 ]

// // For... in : loop entre propriedades enumeráveis de um objeto
// function forInExemplo(obj) {
//     for(prop in obj) {
//         console.log(prop);
//     }
// }

// const meuObjeto = {
//     nome: "João",
//     idade: 20,
//     cidade: "Salvador"
// }

// console.log(forInExemplo(meuObjeto));
// //nome
// //idade
// //cidade

// function forInExemplo(obj) {
//     for(prop in obj) {
//         console.log(obj[prop]);
//     }
// }

// const meuObjeto = {
//     nome: "João",
//     idade: 20,
//     cidade: "Salvador"
// }

// console.log(forInExemplo(meuObjeto));
// //nome
// //idade
// //Salvador

// For...of : loop entre estruturas iteráveis(arrays, strings)

// function logLetras(palavra) {
//     for(letra of palavra) {
//         console.log(letra);
//     }
// }

// const palavra = "abacaxi";
// console.log(logLetras(palavra));


// function logNumeros(num) {
//     for(num of nums) {
//         console.log(num);
//     }
// }

// const nums = [30, 20, 233, 2];
// console.log(logLetras(nums));

// While: executa instruções até que a condição se torne falsa

function exemploWhile() {
    let num = 0;

    while(num <= 5) {
        console.log(num);
        num++;
    }
}
console.log(exemploWhile());

// Do...while: executa instruções até que a condição se torne falsa, porém a primeira execução sempre ocorre

function exemploDoWhile() {
    let num = 0;

    do {
        console.log(num);
        num++;
    } while(num <=5)
}
console.log(exemploDoWhile()); 
// 0
// 1
// 2
// 3
// 4
// 5

function exemploDoWhile() {
    let num = 6;

    do {
        console.log(num);
        num++;
    } while(num <=5)
}
console.log(exemploDoWhile()); // 6