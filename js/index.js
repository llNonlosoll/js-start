//----------------------------------------------------------------------1
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   let spam = "spam";
//   let sale = "sale";
//   const normMessage = message.toLowerCase();

//   if (normMessage.includes(spam)) {
//     result = true;
//   } else if (normMessage.includes(sale)) {
//     result = true;
//   } else {
//     result = false;
//   }

//   //falseove this line
//   return result;
// }

// console.log(checkForSpam("[SPAM] How to earn fast money?"));
//----------------------------------------------------------------------1

//----------------------------------------------------------------------2
// const str = "hello world";

// for (let i = 0; i < str.length; i += 1) {
//   console.log(str[i]);
// }
//----------------------------------------------------------------------2

//----------------------------------------------------------------------3
// const max = 100;
// const min = 20;
// for (let i = min; i >= min && i <= max; i += 1) {
//   if (!(i % 5)) {
//     //25 % 5 => 0 => false => !false => true
//     console.log(i);
//   }
// }
//----------------------------------------------------------------------3

//----------------------------------------------------------------------4
// const message = "JavaScript - це цікаво";
// console.log(message.split("")); // ["JavaScript", "-", "це", "цікаво"]
//----------------------------------------------------------------------4

//----------------------------------------------------------------------5
// const matrix = [
//   [1, 2, 3],
//   [6, 7, 8],
//   [9, 11, 3],
// ];
// console.log(matrix[1][2]); //8
//----------------------------------------------------------------------5

//----------------------------------------------------------------------6
// Напиши скрипт пошуку найменшого числа у масиві.
// Код повинен працювати для будь - якого масиву чисел.
// Використовуй цикл для розв'язання задачі.
// const numbers = [94, 2, 17, 94, 1, 23, 37];
// let min = numbers[0]; // undefined
// for (const value of numbers) {
//   if (value < min) {
//     min = value;
//   }
// }
// console.log(min); // 1
//----------------------------------------------------------------------6

//----------------------------------------------------------------------7
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// for (let i = 0; i < langs.length; i++) {
//   for (let j = 0; j < langs.length; j++) {
//     if (langs[j] > langs[j + 1]) {
//       const item = langs[j];
//       langs[j] = langs[j + 1];
//       langs[j + 1] = item;
//     }
//   }
// }
// console.log(langs);
// // Сучасний варіант
// langs.sort((a, b) => a.localeCompare(b));
// console.log(langs);
//----------------------------------------------------------------------7

//----------------------------------------------------------------------8
// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }
//   return 'You are a minor';
// }

// console.log(checkAge(20));
//----------------------------------------------------------------------8

//----------------------------------------------------------------------9
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }

//   return 'Access denied, wrong password!';
// }

// console.log(checkPassword('mangohackzor'));
//----------------------------------------------------------------------9

//----------------------------------------------------------------------10
// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }

//   return 'The order is accepted, our manager will contact you';
// }

// console.log(checkStorage(100, 50));
//----------------------------------------------------------------------10

//----------------------------------------------------------------------11
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const lastElementIndex = fruits.length - 1;

// const lastElement = fruits[lastElementIndex];

// console.log(fruits[lastElementIndex]);
//----------------------------------------------------------------------11

//----------------------------------------------------------------------12
// Пошук найбільшого елемента. Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber() {
//     // const arr = Array.from(arguments)
//     const arr = [...arguments];
//     let max = arr[0];

//     for (const num of arr) {
//         if (num > max) {
//             max = num
//         }
//     }

//     return max
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37)); // 94
// console.log(findLargestNumber(49, 4, 7, 83, 12)); // 83

// function findLargestNumber() {
//   let max;
//   for (const num of arguments) {
//     if (typeof num === 'number') {
//       max = num;
//       break;
//     }
//   }

//   for (const num of arguments) {
//     if (typeof num === 'number') {
//       if (num > max) {
//         max = num;
//       }
//     } else {
//       max = findLargestNumber(...num);
//       //[1, 143], 5, 7
//       max = findLargestNumber(...num); // 143
//       //[1, 143] => 1,143
//       max = findLargestNumber(...num);
//     }
//   }
//   return max;
// }
// console.log(findLargestNumber([[1, 143], 5, 7], 6, 7, 899, 88, 123));
//----------------------------------------------------------------------12

//----------------------------------------------------------------------13
// Середнє значення. Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage() {
//     let total = 0;
//     for (const num of arguments) {
//         total += num;
//     }

//     return total / arguments.length
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
//----------------------------------------------------------------------13

//----------------------------------------------------------------------14
// Example 8 - Форматування часу
// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     minutes = minutes % 60;
//   return `${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')}`
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
//----------------------------------------------------------------------14

//----------------------------------------------------------------------15
// Колекція курсів (includes, indexOf, push і т. д.). Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(course) {
//     if (courses.includes(course)) {
//         return 'Ви вже маєте такий курс';
//     }

//     courses.push(course)
// }
// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS')); // 'Ви вже маєте такий курс'

// function removeCourse(course) {
//     if (courses.includes(course)) {
//         const idx = courses.indexOf(course)
//         courses.splice(idx, 1);

//         return
//     }

//     return "Курс із таким ім'ям не знайдено"
// }

// !!~courses.indexOf(course); 0 => false
//        -1 => true
// -(0 + 1) -1 => true
//  -(-1 + 1) -0 => false
//    courses.includes(course)
// !!  === Boolean()
// console.log(!!~1);

// function removeCourse(course) {
//     const idx = courses.indexOf(course);
//     if (!!~idx) {
//         courses.splice(idx, 1);
//         return;
//     }
//     return "Курс із таким ім'ям не знайдено"
// }
// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue'));; // 'Курс із таким ім'ям не знайдено'

// function updateCourse(oldCourse, newCourse) {
//   const idx = courses.indexOf(oldCourse);
//   if (!!~idx) {
//     courses.splice(idx, 1, newCourse);
//     return;
//   }

//   return "Курс із таким ім'ям не знайдено";
// }
// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(updateCourse('Express', 'NestJS'));
//----------------------------------------------------------------------15

//----------------------------------------------------------------------16
// Функція повертає масив з двох елементів - першого і останнього елемента параметра array

// function getExtremeElements(array) {
//   // const firstElement = array[0];
//   // const lastElement = array[array.length - 1];

//   return [array[0], array[array.length - 1]];
// }

// getExtremeElements(['Earth', 'Mars', 'Venus']);
//----------------------------------------------------------------------16

//----------------------------------------------------------------------17
// Функція повертає загальну вартість залежно від довжини фрази.

// function calculateEngravingPrice(message, pricePerWord) {
//   const wordsNumber = message.split(' ');

//   return wordsNumber.length * pricePerWord;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
//----------------------------------------------------------------------17

//----------------------------------------------------------------------18
// функція slugify(title) приймає рядок title, і повертає slug, створений з цього рядка.

// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('English for developer'));
//----------------------------------------------------------------------18

//----------------------------------------------------------------------19
// Функція makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних масивів.
// Параметр maxLength містить максимально допустиму довжину нового масиву.

// function makeArray(firstArray, secondArray, maxLength) {
//   let array;
//   return (array = firstArray.concat(secondArray).slice(0, maxLength));
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
//----------------------------------------------------------------------19

//----------------------------------------------------------------------20
//Функція приймає значення найдовшого слова
// function findLongestWord(string) {
//   const words = string.split(' ');
//   let longestWord = words[0];

//   for (let i = 0; i < words.length; i++) {
//     if (longestWord.length < words[i].length) {
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord('May the force be with you'));
//----------------------------------------------------------------------20

//----------------------------------------------------------------------21
//Функція пушить всі значення від min до max в масив
// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }

//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
//----------------------------------------------------------------------21

//----------------------------------------------------------------------22
//Функція пушить всі значення більші за value в новий масив
// function filterArray(numbers, value) {
//   const newArray = [];

//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }

//   return newArray;
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20));
//----------------------------------------------------------------------22

//----------------------------------------------------------------------23
//Функція порівнює 2 масиви і пушить всі однакові значення в новий масив
// function getCommonElements(array1, array2) {
//   const newArray = [];

//   for (const number of array1) {
//     if (array2.includes(number)) {
//       newArray.push(number);
//     }
//   }

//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//----------------------------------------------------------------------23

//----------------------------------------------------------------------24
//Функція перебирає масив і пушить в новий всі значення якід діляться на 2 без остатку
// function getEvenNumbers(start, end) {
//   const newArray = [];

//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }

//   return newArray;
// }

// console.log(getEvenNumbers(6, 12));
//----------------------------------------------------------------------24

//----------------------------------------------------------------------25
//Функція перебирає масив та перевіряє наявність в ньому елемента value
// function includes(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

// Те саме з BITWISE
// function includes(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     const result = !!~array.indexOf(value);
//     return result;
//   }
// }

// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
//----------------------------------------------------------------------25

//----------------------------------------------------------------------26
// Функція calAverage() приймає довільну кількість аргументів і повертає їхнє середнє значення.

// function calAverage() {
//     let total = 0;
//     for (const num of arguments) {
//         total += num;
//     }

//     return total / arguments.length
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
//----------------------------------------------------------------------26

//----------------------------------------------------------------------27
//  Функція formatTime(minutes) переводе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     minutes = minutes % 60;
//   return `${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')}`
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
//----------------------------------------------------------------------27

//----------------------------------------------------------------------28
// Приклад рекурсії

// function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//   const countArray = countup(n - 1);
//       countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countup(5));
//----------------------------------------------------------------------28

//----------------------------------------------------------------------29
// Комплексне завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction)
// // Transaction.DEPOSIT = 'asdnasjkdnjasdjn'
// // console.log(Transaction);
// // /*
// //  * Кожна транзакція це об'єкт із властивостями: id, type та amount
// //  */

// const account = {
//     // Поточний баланс рахунку
//     balance: 0,

//     // Історія транзакцій
//     transactions: [{
//         id: 16,
//         amount: 145,
//         type: 'deposit'
//     }, ],

//     /*
//      * Метод створює та повертає об'єкт транзакції.
//      * Приймає суму та тип транзакції.
//      */
//     createTransaction(amount, type) {
//         return {
//             id: Date.now(),
//             amount,
//             type
//         }
//     },

//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій
//      */
//     deposit(amount) {
//         if (amount <= 0) {
//             return 'Error'
//         }
//         const item = this.createTransaction(amount, Transaction.DEPOSIT)
//         this.balance += amount
//         this.transactions.push(item)
//     },

//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//         if (amount > this.balance || amount <= 0) {
//             return 'недостатньо коштів';
//         }
//         const item = this.createTransaction(amount, Transaction.WITHDRAW)
//         this.transactions.push(item);
//         this.balance -= amount;

//     },

//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//         return this.balance
//     },

//     /*
//      * Метод шукає та повертає об'єкт транзакції по id
//      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction
//             }
//         }
//         return 'Empty';
//     },

//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//         let sum = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 sum += transaction.amount
//             }
//         }

//         return sum;
//     },
// };
// account.deposit(1);
// account.deposit(1231);
// account.deposit(1431);
// account.withdraw(123);
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account);
//----------------------------------------------------------------------29
