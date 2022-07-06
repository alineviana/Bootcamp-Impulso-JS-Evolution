// Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
// Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)

// Solução 1
function verificaPalindromo(string) {
  if (!string) return "String inexistente";

  return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ama"));

// Solução 2

function verificaPalindromo(string) {
  if (!string) return "String inexistente";

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(verificaPalindromo("gato"));

// Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.
// Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]
// Output -> [1, 3, 0, 0, 0, 33, 23, 0]
// Input -> []
// Output -> -1

function substituiNumerosPares(array) {
  if (!array) return -1;
  if (!array.length) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log("Você já é zero!");
    } else if (array[i] % 2 === 0) {
      console.log(`Substituindo ${array[i]} por 0...`);
      array[i] = 0;
    }
  }
  return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiNumerosPares(arr));
