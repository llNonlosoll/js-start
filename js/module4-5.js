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
