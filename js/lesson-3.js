// Задачва 1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((number) => {
//   return number * number;
// });

// console.log(squares);

// const calcSquare = (numbers) => {
//   const res = numbers.map((number) => {
//     return number * number;
//   });
//   return res;
// };

// console.log(calcSquare(numbers));
//
//
//
//
//
//
//
//
// Задача 2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const values = data.flatMap((item) => item.values);
// console.log(values);
//
//
//
//
//
//
//
//
// Задача 3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const isUnderAge = people.some((person) => person.age < 20);
// console.log(isUnderAge);
//
//
//
//
//
//
//
//
// Задача 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const isEven = numbers.every((number) => number % 2 === 0);
// console.log(isEven);
//
//
//
//
//
//
//
//
// Задача 5
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const firstIdd = numbers.find((number) => number % 2 !== 0);
// console.log(firstIdd);
//
//
//
//
//
//
//
//
// Задача 6
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const sortNumbers = numbersArray.toSorted((a, b) => a - b);
// console.log(sortNumbers);
//
//
//
//
//
//
//
//
// Задача 7
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];
// const inAlphabeticOrder = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabeticOrder);
//
//
//
//
//
//
//
//
// Задача 8
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const sortByAge = users.toSorted((a, b) => a.age - b.age);
// console.log(sortByAge);
//
//
//
//
//
//
//
//
// Задача 9
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];
// const filterByAge = user.filter((person) => person.age > 20);
// console.log(filterByAge);
//
//
//
//
//
//
//
//
// Задача 10
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, number) => {
//   return acc + number;
// }, 0);

// console.log(sum);
