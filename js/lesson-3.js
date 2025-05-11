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
//
//
//
//
//
//
// Виконайте сортування масиву цін за спаданням та зростанням.
// const prices = [1000, 240, 670, 360, 89, 20];

// const sortPriceUp = prices.toSorted((a, b) => a - b);
// const sortPriceDown = prices.toSorted((a, b) => b - a);

// console.log(sortPriceUp);
// console.log(sortPriceDown);
//
//
//
//
//
//
// Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
// перебирає масив і додає до кожного ім'я привітання.
// Функція повертає новий масив  ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

// const names = ["Ivan", "Maria", "Anna"];
// const greet = (names) => {
//   const greetings = names.map((name) => `${name} привіт!`);
//   return greetings;
// };
// console.log(greet(names));
//
//
//
//
//
//
// Перевірити чи містить даний масив, хоча б одне число більше 20.

// const numbers = [20, 16, 11, 13, 15];
// const over20 = numbers.some((number) => number > 20);
// console.log(over20);
//
//
//
//
//
//
// Перевірити чи всі студенти старші 18 років.

// const students = [
//   { name: "Alex", age: 17 },
//   { name: "Stas", age: 18 },
//   { name: "Mike", age: 22 },
//   { name: "Den", age: 20 },
// ];
// const older18 = students.every((student) => student.age > 18);
// console.log(older18);
//
//
//
//
//
//
// Напиши функцію, котра приймає масив користувачів і id.
// У масиві користувачів потрібно знайти людину з заданим id
// і повернути його ім'я. Якщо користувача не було знайдено
// функція повертає повідомлення
// "Користувача з таким id не знайдено"

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// const findById = (users, id) => {
//   const user = users.find((user) => user.id === id);
//   if (user) {
//     return user.name;
//   }
//   return "Користувача з таким id не знайдено";
// };

// console.log(findById(users, 5));
//
//
//
//
//
//
//
// Є масив студентів. Кожен студент має ім’я та оцінку. Напиши функцію, яка:
// знаходить студентів, у яких оцінка більша або дорівнює 90;
// створює з них список імен;
// повертає цей список у вигляді рядка, розділеного комами.
// const students = [
//   { name: "Оля", grade: 95 },
//   { name: "Іван", grade: 88 },
//   { name: "Марія", grade: 91 },
//   { name: "Андрій", grade: 78 },
//   { name: "Катя", grade: 90 },
// ];

// const findStudents = (students) => {
//   const gradeOver90 = students.filter((student) => student.grade >= 90);
//   const studentsList = gradeOver90.map((student) => student.name);
//   return studentsList.join(", ");
// };

// console.log(findStudents(students));
//
//
//
//
//
//
//
// Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.
// const friends = [
//   {
//     passport: "03005988",
//     name: "Joseph Francis Tribbiani Jr",
//     age: 32,
//     sex: "m",
//   },
//   { passport: "03005989", name: "Chandler Muriel Bing", age: 33, sex: "m" },
//   { passport: "03005990", name: "Ross Eustace Geller", age: 33, sex: "m" },
//   { passport: "03005991", name: "Rachel Karen Green", age: 31, sex: "f" },
//   { passport: "03005992", name: "Monica Geller", age: 31, sex: "f" },
//   { passport: "03005993", name: "Phoebe Buffay", age: 34, sex: "f" },
// ];

// const getGirlsPassports = (friends) => {
//   const girlsPassports = friends
//     .filter((friend) => friend.sex === "f")
//     .map((girl) => girl.passport);
//   return girlsPassports;
// };

// console.log(getGirlsPassports(friends));

// Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.
// const getTotalBoysYears = (friends) => {
//   const totalBoysAge = friends
//     .filter((friend) => friend.sex === "m")
//     .reduce((acc, boys) => acc + boys.age, 0);
//   return totalBoysAge;
// };
// console.log(getTotalBoysYears(friends));

//
//
//
//
//
//
//
// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.
// const products = [
//   { name: "Milk", price: 20 },
//   { name: "Bread", price: 10 },
//   { name: "Eggs", price: 15 },
// ];
// const totalPrice = products
//   .filter((product) => product.price > 10)
//   .reduce((acc, product) => acc + product.price, 0);
// console.log(totalPrice);
//
//
//
//
//
//
//
// Відсортувати імена активних користувачів (isActive: true). за алфавітом.
// const users = [
//   { id: 1, name: "Іван", isActive: true },
//   { id: 2, name: "Олена", isActive: false },
//   { id: 3, name: "Андрій", isActive: true },
//   { id: 4, name: "Світлана", isActive: false },
//   { id: 5, name: "Марія", isActive: true },
// ];
// const activeUsers = users
//   .filter((user) => user.isActive)
//   .toSorted((a, b) => a.name.localeCompare(b.name));
// console.log(activeUsers);
//
//
//
//
//
//
//
//
// Маємо масив об'єктів, який представляє список замовлень:
// Завдання:
// Поверніть список товарів з усіх виконаних замовлень.
// const orders = [
//   { id: 1, products: ["Milk", "Bread"], status: "completed" },
//   { id: 2, products: ["Eggs", "Juice"], status: "processing" },
//   { id: 3, products: ["Pasta", "Spices"], status: "completed" },
// ];
// const orderCmplete = orders
//   .filter((order) => order.status === "completed")
//   .flatMap((order) => order.products);
// console.log(orderCmplete);
//
//
//
//
//
//
//
//
// Порахуй загальну кількість лайків в категорії  Fashion
// const posts = [
//   { title: "Post 1", likes: 20, category: "Tech" },
//   { title: "Post 2", likes: 45, category: "Fashion" },
//   { title: "Post 3", likes: 12, category: "Tech" },
//   { title: "Post 4", likes: 30, category: "Fitness" },
//   { title: "Post 5", likes: 15, category: "Fashion" },
//   { title: "Post 6", likes: 50, category: "Tech" },
// ];
// const likesCount = posts
//   .filter((post) => post.category === "Fashion")
//   .reduce((acc, arr) => acc + arr.likes, 0);
// console.log(likesCount);
//
//
//
//
//
//
//
//
//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calculateArea() {
//     return this.height * this.width;
//   }
// }

// const rectangle = new Rectangle(7, 16);
// console.log(rectangle.calculateArea());
//
//
//
//
//
//
//
//
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email
// class Client {
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
//
//
//
//
//
//
//
//
// // Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.
// class Phone {
//   #price;
//   static MAX_PRICE = 40000;

//   constructor(price) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Phone.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
// }

// const phone = new Phone(60000);
// console.log(phone.price);
//
//
//
//
//
//
//
//
// Створіть клас Car, який має конструктор для зберігання марки та
// року виробництва автомобіля.
// 1. Додайте метод, який обчислює вік автомобіля на основі поточного року
// та року виробництва і виведе в кнсоль рядок `Вік автомобіля: age років`
// 2. Додайте перевірку, якщо вік автомобіля більше ніж 5 років, виводимо
// повідомлення "Автомобіль потребує технічного обслуговування."
// в іншому випадку - "Автомобіль не потребує технічного обслуговування зараз."
// 3. Додайте перевірку, якщо рік виробництва перевищює поточний рік,
// вивести повідомлення "Помилка: Рік виробництва не може бути пізнішим за поточний рік."
// class Car {
//   constructor(model, year) {
//     this.model = model;
//     this.year = year;
//   }
//   getAge() {
//     const currentYear = 2025;
//     const age = currentYear - this.year;
//     console.log(`Вік автомобіля: ${age} років`);

//     if (age > 5) {
//       console.log("Автомобіль потребує технічного обслуговування.");
//     } else {
//       console.log("Автомобіль не потребує технічного обслуговування зараз.");
//     }

//     if (this.year > currentYear) {
//       console.log(
//         "Помилка: Рік виробництва не може бути пізнішим за поточний рік."
//       );
//     }
//   }
// }
// const honda = new Car("Honda", 2005);
// honda.getAge();
// const nissan = new Car("Nissan", 2027);
// nissan.getAge();
//
//
//
//
//
//
//
//
// Створіть клас BankAccount, який має конструктор для зберігання
// номеру рахунку та балансу.
// Додайте методи:
// withdraw - метод для зняття готівки. Отримує в якості аргументу
// суму готівки котру потрібно зняти. Готівку можна зняти за умови,
// що баланс більше або дорівнює сумі, котру хоче зняти користувач.
// Виводить повідомлення: `Знято amount грн. Залишок на рахунку: balance грн.`
// або "Недостатньо коштів на рахунку."
// deposit - метод для пововнення балансу. Отримує в якості аргументу
// суму котру користувач хоче покласти на рахунок.
// Виводить повідомлення: `Поповнено amount грн. Залишок на рахунку: balance грн.`
// checkBalance - метод для перевірки балансу.
// Виводить повідомлення `Залишок на рахунку: balance грн.`
// class BankAccount {
//   constructor(accountNumber, balance) {
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }
//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       console.log(
//         `Знято ${amount} грн. Залишок на рахунку: ${this.balance} грн.`
//       );
//     } else {
//       console.log("Недостатньо коштів на рахунку.");
//     }
//   }
//   deposit(amount) {
//     this.balance += amount;
//     console.log(
//       `Поповнено ${amount} грн. Залишок на рахунку: ${this.balance} грн.`
//     );
//   }
//   checkBalance() {
//     console.log(`Залишок на рахунку: ${this.balance} грн.`);
//   }
// }
// const account = new BankAccount("555666777", 10000);
// account.withdraw(16000);
// account.withdraw(2600);
// account.deposit(3000);
// account.checkBalance();
//
//
//
//
//
//
//
//
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
//  Крім того, клас `Employee` має мати метод `getEmployeeDetails()`,
// який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.
class Person {
  constructor(name, age, gender, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }
}

class Employee extends Person {
  constructor(salary, department) {
    this.salary = salary;
    this.department = department;
  }
  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
    };
  }
}

const person = new Person("John", 30);
const employee = new Employee(50000, "IT");
console.log(person);
console.log(employee.getEmployeeDetails());
