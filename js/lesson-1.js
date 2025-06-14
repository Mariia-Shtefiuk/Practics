// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// let number = prompt("Введіть число:");
// console.log(number);

// if (number === "10") {
//   alert("Вірно");
// } else {
//   alert("Невірно");
// }

// Завдання 2:
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// let num;

// if (min >= 0 && min < 15) {
//   num = "першу";
// } else if (min >= 15 && min < 30) {
//   num = "другу";
// } else if (min >= 30 && min < 45) {
//   num = "третю";
// } else {
//   num = "четверту";
// }
// alert(`${min} входить в ${num} чверть`);

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// let num = prompt("Введіть число від 1 до 4:");
// let result;
// console.log(result);

// switch (num) {
//   case "1":
//     alert((result = "зима"));
//     break;
//   case "2":
//     alert((result = "весна"));
//     break;
//   case "3":
//     alert((result = "літо"));
//     break;
//   case "4":
//     alert((result = "осінь"));
//     break;
//   default:
//     alert("Вибачте, але ви маєте ввести значення від 1 до 4 включно");

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number!";
//   }
//   return a < b ? a : b;
// }

// console.log(min(4, 8));

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі
// ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// let clock = prompt("Введіть кількість хвилин:");

// function getTime(value) {
//   const hours = Math.floor(value / 60);
//   const minutes = value % 60;

//   const formatHours = String(hours).padStart(2, "0");
//   const formatMinutes = String(hours).padStart(2, "0");
//   alert(`${formatHours}:${formatMinutes}`);
// }

// getTime(clock);

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// number = 0;

// while (number <= 20) {
//   console.log(number);
//   number++;
// }

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;

//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getNumbers(1, 5));

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(10);

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// ______________________________________________________________;
// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else if (age.confirm("Вам є 18 років?")) { // confirm повертає true/false - потрібен запит на підтвердження
//     true;
//   } else {
//     false;
//   }
// }

// console.log(isAdult(16));
