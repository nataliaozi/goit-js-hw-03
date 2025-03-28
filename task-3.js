// Napisz funkcję filterArray(numbers, value),
// która jako parametry przyjmuje tablicę liczb (numbers) i wartość (value).
// Funkcja powinna zwrócić nową tablicę zawierającą tylko te liczby z tablicy numbers,
//  które są większe niż value.

// Wewnątrz funkcji:

// Utwórz pustą tablicę, do której będziesz dodawać pasujące liczby.
// Użyj pętli do iteracji przez każdy element tablicy numbers.
// Użyj warunkowej instrukcji if wewnątrz pętli, aby sprawdzić każdy element i dodać go do tablicy.
// Zwróć nową tablicę z pasującymi liczbami jako wynik.

// Weź poniższy kod i wstaw go po deklaracji funkcji, aby sprawdzić,
// czy działa poprawnie. Konsola wyświetli wyniki jego działania.

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

function filterArray(numbers, value) {
  const newTable = [];
  for (const number of numbers) {
    if (number > value) {
      newTable.push(number);
    }
  }
  return newTable;
}

// function filterArray(numbers, value) {
//   const newTable = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       newTable.push(numbers[i]);
//     }
//   }
//   return newTable;
// }

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
