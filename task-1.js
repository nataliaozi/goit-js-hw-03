// Napisz funkcję slugify(title), która przyjmuje tytuł artykułu,
// parametr title i zwraca slug utworzony z tego ciągu.

// Wartością parametru title będą ciągi, których słowa są oddzielone tylko spacjami.
// Wszystkie znaki slug muszą być pisane małymi literami.
// Wszystkie słowa slug muszą być oddzielone myślnikami.

// Weź poniższy kod i wstaw go po deklaracji swojej funkcji, aby sprawdzić, czy działa poprawnie.
// Konsola wyświetli wyniki jego działania.

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
// // "how-to-become-a-junior-developer-in-two-weeks"
// -------------------------------------------------------------------------------
// function slugify(title) {
//   let lowerCase = title.toLowerCase();
//   return lowerCase.split(" ").join("-");
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
