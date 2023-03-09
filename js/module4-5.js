//----------------------------------------------------------------------1
// CALLBACK
// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Полі', takeCall, leaveHoloMessage);
//----------------------------------------------------------------------1

//----------------------------------------------------------------------2
// REDUCE
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// Пройдемо по всіх елементах колекції і додамо значення властивості likes
// до акумулятора, початкове значення якого вкажемо 0.

// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
// для підрахунку лайків з колекції

// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets)); // 32

// Пройдемо по всіх елементах колекції і додамо значення властивості tags
// до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// для збирання тегів з колекції

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Зберемо унікальні теги з колекції
// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// Початкове значення акумулятора - це порожній об'єкт {}

// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);
//----------------------------------------------------------------------2

//----------------------------------------------------------------------3
// First callback function
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// console.log(makeMessage('Royal Grand', makePizza));
// console.log(makeMessage('Ultracheese', deliverPizza));
//----------------------------------------------------------------------3

//----------------------------------------------------------------------4
// Callback, як інлайн функція, в якості аргумента
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });
//----------------------------------------------------------------------4

//----------------------------------------------------------------------5
// Another one callback
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(pizzaName);
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//   return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
//----------------------------------------------------------------------5

//----------------------------------------------------------------------6
// forEach
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(element => {
//     totalPrice += element;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// forEach-2
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(number => (number > value ? filteredNumbers.push(number) : 0));

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// forEach-3 and includes;
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => (secondArray.includes(element) ? commonElements.push(element) : 0));

//   return commonElements;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// forEach-4
// const changeEven = (numbers, value) => {
//   const changedNumbers = [];
//   numbers.forEach(number =>
//     !(number % 2) ? changedNumbers.push(number + value) : changedNumbers.push(number),
//   );

//   return changedNumbers;
// };

// console.log(changeEven([1, 2, 3, 4, 5], 10));
//----------------------------------------------------------------------6

//----------------------------------------------------------------------7
// map
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// map with object
// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.38 },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(({ title }) => title);
// console.log(titles);

// map2
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
// ];

// const getUserNames = users => {
//   return users.map(user => user.email);
// };

// console.log(getUserNames(users));

// flatMap
// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         genres: ['adventure', 'history'],
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         genres: ['fiction'],
//     },
//     {
//         title: 'Redder Than Blood',
//         author: 'Tanith Lee',
//         genres: ['horror', 'mysticism'],
//     },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres);
//----------------------------------------------------------------------7

//----------------------------------------------------------------------8
//filter
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter(number => !(number % 2));
// const oddNumbers = numbers.filter(number => number % 2);

//filter2 with unique values
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];

// const allGenres = books
//   .flatMap(book => book.genres)
//   .filter((genre, index, array) => array.indexOf(genre) === index);
// console.log(allGenres);

//----------------------------------------------------------------------8

//----------------------------------------------------------------------9
// find
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
//----------------------------------------------------------------------9

//----------------------------------------------------------------------10
// every
// const firstArray = [26, 94, 36, 18];

// const eachElementInFirstIsEven = firstArray.every(number => !(number % 2));
// const eachElementInFirstIsOdd = firstArray.every(number => number % 2);
//----------------------------------------------------------------------10

//----------------------------------------------------------------------11
// some
// const firstArray = [26, 94, 36, 18];

// const anyElementInFirstIsEven = firstArray.some(number => !(number % 2));
// const anyElementInFirstIsOdd = firstArray.some(number => number % 2);
//----------------------------------------------------------------------11

//----------------------------------------------------------------------12
// reduce
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, { playtime, gamesPlayed = 1 }) => total + playtime / gamesPlayed,
//   0,
// );
// //gamesPlayed = 1 default value на випадок, якщо не буде вказано
// console.log(totalAveragePlaytimePerGame);

// reduce2
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const getTotalFriendCount = users => {
//   return users.reduce((total, user) => total + user.friends.length, 0);
// };
// console.log(getTotalFriendCount(users));

// Цікавий reduce
// const str = 'asdaskfjnaskjfnmaeklsmflasfasdsapoldwa';
// const obj = abc => {
//   return [...abc].reduce((acc, item) => {
//     acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);
//     return acc;
//   }, {});
// };
// console.log(obj(str));

// Цікавий reduce в інший спосіб
// const str = 'asdaskfjnaskjfnmaeklsmflasfasdsapoldwa';
// const obj = str.split('').reduce((acc, item) => {
//   acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);
//   return acc;
// }, {});
// console.log(obj);
//----------------------------------------------------------------------12

//----------------------------------------------------------------------13
// sort
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky'];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// console.log(ascendingReleaseDates);
// const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(alphabeticalAuthors);

// sort2
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author),
// );
// console.log(sortedByAuthorName);
// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author),
// );
// console.log(sortedByReversedAuthorName);
// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating,
// );
// console.log(sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating,
// );
// console.log(sortedByDescentingRating);

// sort3
// const users = [
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Eddie Strong'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const sortByAscendingBalance = users => {
//   return users.sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
// };

// const sortByDescendingFriendCount = users => {
//   return [...users].sort(
//     (firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length,
//   );
// };

// const sortByName = users => {
//   return [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));
// };

// console.log(sortByName(users));
//----------------------------------------------------------------------13

//----------------------------------------------------------------------14
// Chain
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = [...books]
//   .sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author))
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author);

// console.log(names);

// Chain2
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const getNamesSortedByFriendCount = users => {
//   return [...users]
//     .sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
//     .map(user => user.name);
// };

// const getSortedFriends = users => {
//   return [...users]
//     .flatMap(user => user.friends)
//     .filter((name, index, array) => array.indexOf(name) === index)
//     .sort();
// };

// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);
// };

// console.log(getTotalBalanceByGender(users, 'female'));
//----------------------------------------------------------------------14

//----------------------------------------------------------------------15
// Приклад прототипного наслідування
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
//----------------------------------------------------------------------15

//----------------------------------------------------------------------16
// Приклад створення класу
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     return (this.price = newPrice);
//   }
// }

// Приклад створення класу2
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     return this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.items.forEach((item, index, array) => {
//       item === itemToRemove ? array.splice(index, 1) : 0;
//     });
//   }
// }

// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

// console.log(storage);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Приклад створення класу3
// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//     console.log(typeof value);
//   }

//   getValue() {
//     return this.value;
//   }

//   padStart(str) {
//     this.value = this.value.padStart(this.value.length + 1, str);
//   }

//   padEnd(str) {
//     this.value = this.value.padEnd(this.value.length + 1, str);
//   }

//   padBoth(str) {
//     this.value = this.value.padStart(this.value.length + 1, str);
//     this.value = this.value.padEnd(this.value.length + 1, str);
//   }
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// Приклад створення класу3 - 2 варіант
// class StringBuilder {

//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// Приклад створення класу4
// class User {
//   static counter = 0;
//   static addUser() {
//     // User.counter +=1;
//     this.counter += 1;
//     console.log(`Number of users ${this.counter}`);
//   }
//   #location;
//   constructor({ name, email, age = 18, location = 'World', password } = {}) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.#location = location;
//     this.password = password;
//     User.addUser();
//   }
//   sayHello() {
//     console.log(this.name);
//   }

//   #getEmail() {
//     console.log(this.email);
//   }
//   get locale() {
//     return this.#location;
//   }
//   set locale(city) {
//     const value = prompt('Enter password');
//     this.#getEmail();
//     if (value === this.password) {
//       this.#location = city;
//       console.log(this.#location);
//     } else {
//       console.log('Хацкер ? 😱');
//     }
//   }
// }
//----------------------------------------------------------------------16

//----------------------------------------------------------------------17
// Приватні властивості
// class Car {
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }
// const car = new Car({ brand: 'bmw', model: 'X5', price: 58900 });
// console.log(car);
//----------------------------------------------------------------------17

//----------------------------------------------------------------------18
// GET & SET
// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }
//----------------------------------------------------------------------18

//----------------------------------------------------------------------19
// Static
// class Car {
//   #price;
//   static MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     newPrice < Car.MAX_PRICE ? (this.#price = newPrice) : this.#price;
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
//----------------------------------------------------------------------19

//----------------------------------------------------------------------20
// Static method
// class Car {
//   static #MAX_PRICE = 50000;

//   static checkPrice(price) {
//     return this.#MAX_PRICE >= price
//       ? 'Success! Price is within acceptable limits'
//       : 'Error! Price exceeds the maximum';
//   }

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
//----------------------------------------------------------------------20

//----------------------------------------------------------------------21
// Extends
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
//----------------------------------------------------------------------21

//----------------------------------------------------------------------22

// - Отсортировать ученых по количеству прожитых лет.
// - Удалить из массива ученых, родившихся в 15, 16 или 17 веках.
// - Найти ученого, который родился позже всех.
// - Найти год рождения Albert Einstein.
// - Найти ученых, фамилия которых начинается на букву "С".
// - Удалить из массива всех ученых, имя которых начинается на букву "A".
// - Найти ученого, который прожил больше всех и ученого, который меньше.
// - Найти ученых, у которых совпадают первые буквы имени и фамилии.
// - Узнать, все ли ученые работали в 19 веке.

const scientists = [
  { name: 'Albert', surname: 'Einstein', born: 1879, dead: 1955, id: 1 },
  { name: 'Isaac', surname: 'Newton', born: 1643, dead: 1727, id: 2 },
  { name: 'Galileo', surname: 'Galilei', born: 1564, dead: 1642, id: 3 },
  { name: 'Marie', surname: 'Curie', born: 1867, dead: 1934, id: 4 },
  { name: 'Pierre', surname: 'Curie', born: 1859, dead: 1906, id: 5 },
  { name: 'Johannes', surname: 'Kepler', born: 1571, dead: 1630, id: 6 },
  { name: 'Nicolaus', surname: 'Copernicus', born: 1473, dead: 1543, id: 7 },
  { name: 'Max', surname: 'Planck', born: 1858, dead: 1947, id: 8 },
  { name: 'Katherine', surname: 'Blodgett', born: 1898, dead: 1979, id: 9 },
  { name: 'Ada', surname: 'Lovelace', born: 1815, dead: 1852, id: 10 },
  { name: 'Sarah E.', surname: 'Goode', born: 1855, dead: 1905, id: 11 },
];

// - Получить массив ученых, родившихся в 19 веке.
// const wasBorn = scientists => {
//   return scientists.filter(person => person.born >= 1800 && person.born <= 1899);
// };
// console.log(wasBorn(scientists));

// - Найти общую сумму лет, сколько прожили все ученые.
// const lives = scientists =>
//   scientists
//     .map(scientist => scientist.dead - scientist.born)
//     .reduce((acc, ages) => {
//       acc += ages;
//       return acc;
//     }, 0);
// console.log(lives(scientists));

// - Отсортировать ученых по алфавиту.
// const abcScientists = scientists =>
//   scientists.sort(({ name: a }, { name: b }) => a.localeCompare(b));
// console.log(abcScientists(scientists));
//----------------------------------------------------------------------22

//----------------------------------------------------------------------23
// Рекурсія
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// console.log(countdown(10));

// Рекурсія2
// function rangeOfNumbers(startNum, endNum) {
//   let n = endNum;
//   if (n < startNum) {
//     return [];
//   } else {
//     const countArray = rangeOfNumbers(startNum, endNum - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(rangeOfNumbers(6, 9));
//----------------------------------------------------------------------23

//----------------------------------------------------------------------24
// Самостійне опрацювання
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
//----------------------------------------------------------------------24
