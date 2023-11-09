// const users = [
//   {
//     id: "1",
//     name: "Test",
//   },
//   {
//     id: "2",
//     name: "Test2",
//   },
//   {
//     id: "3",
//     name: "Test3",
//   },
// ];

// --------------------------------------------- Метод map

// const map = (array, id) => {
//   let newArray = [];

//   array.forEach((item) => {
//     if (item.id === id) {
//       let newItem = { ...item, name: "Hello Чел." };
//       newArray.push(newItem);
//     } else {
//       newArray.push(item);
//     }
//   });
//   // for (let item of array) {
//   //   if (item.id === id) {
//   //     let newItem = { ...item, name: "Hello Чел." };
//   //     newArray.push(newItem);
//   //   } else {
//   //     newArray.push(item);
//   //   }
//   // }
//   return newArray;
// };

// console.log(map(users, "1"));

// ------------------------------------------ Каррирование
// const foo = (a) => {
//   return (b) => {
//     return (c) => {
//       console.log(a, b, c);
//     };
//   };
// };

// foo(1)(2)(3);

// ---------------------------------------- Работа с объектами

// Данные на вход
// const users = [
//   {
//     lastname: "Мархиев",
//     username: "Ислам",
//   },
//   {
//     lastname: "Мархиев",
//     username: "Адам",
//   },
//   {
//     lastname: "Халухаев",
//     username: "Ислам",
//   },
//   {
//     lastname: "Халухаев",
//     username: "Имран",
//   },
// ];

// Данные на выход
// Необходимо получить такой объект
/*
  {
    'Мархиев': [ 'Ислам', 'Адам' ],
    'Халухаев': [ 'Ислам', 'Имран' ],
  }
  */

// setTimeout(() => {
//   console.log("1");
// }, 0);
// setTimeout(() => {
//   console.log("2");
// }, 0);

// new Promise((resolve, reject) => {
//   resolve("3");
// }).then((res) => console.log("4"));

// new Promise((resolve, reject) => {
//   resolve("5");
// }).then((res) => console.log("6"));

// //Вывод
// // Promise 1 resolved
// // Promise 2 resolved
// // setTimeout 1
// // setTimeout 2

// setTimeout(function timeout() {
//   console.log("1");
// }, 0);

// let p = new Promise(function (resolve, reject) {
//   console.log("2");
//   resolve();
// });

// p.then(function () {
//   console.log("3");
// });

// console.log("4");

// setTimeout(() => {
//   console.log("1");
// }, 0);
// setTimeout(() => {
//   console.log("2");
// }, 0);

// console.log("7");

// new Promise((resolve, reject) => {
//   resolve("3");
// }).then((res) => console.log("4"));

// new Promise((resolve, reject) => {
//   resolve("5");
// }).then((res) => console.log("6"));

// 4 6 1 2

// setTimeout(function timeout() {
//   console.log("1");
// }, 0);

// let p = new Promise(function (resolve, reject) {
//   console.log("2");
//   resolve();
// });

// p.then(function () {
//   console.log("3");
// });

// console.log("4");

// 2 4 3 1

// console.log(("10" && 1) || 20); //

// const a = null;

// if (a) {
//   console.log(123);
// } else {
//   console.log("555");
// }

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// });

// Promise.resolve().then(() => console.log("3"));
// Promise.resolve().then(() =>
//   setTimeout(() => {
//     console.log("4");
//   })
// );
// Promise.resolve().then(() => console.log("5"));

// setTimeout(() => {
//   console.log("6");
// });

// console.log("7");

// 1 7 3 5 4 2 6

// function foo() {
//   let y = 10;

//   return {
//     y: 20,
//     getOne: () => {
//       console.log(this.y);
//     },
//     getTwo: function () {
//       console.log(this.y);
//     },
//   };
// }

// const newObj = foo();

// newObj.getOne(); // undefined
// newObj.getTwo(); // 20

// const trbr = foo.call({ y: 40 });

// trbr.getOne(); // 40
// trbr.getTwo(); // 20

// function getNames(user) {
//   console.log("Name: ", user.name, "age: ", user.age);
// }

// const user = {
//   name: "Test",
//   age: 20,
// };

// getNames(user);

// const sum = (a, b) => {
//   return a + b;
// };

// const minus = (a, b) => {
//   return a - b;
// };

// function calculate(a, b, operation, newMinus) {
//   return a + b + operation(a, b) + newMinus + this.age;
// }

// const res = calculate.call({ age: 20 }, 10, 10, sum, minus(10, 20));

// console.log(res);
