
// function makeTransaction(quantity, pricePerDroid) {
//     const totalPrice = (quantity * pricePerDroid);
//     return (`You ordered ${quantity} droids worth ${totalPrice} credits!`);
// }
// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(3, 1000));
// console.log(makeTransaction(10, 500));

// *****************  Задача 1. Замовлення дроїдів

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     let totalSum = quantity * pricePerDroid;
//     if (totalSum <= customerCredits) {
//        return (`You ordered ${quantity} droids worth ${totalSum} credits!`);
//     } else {
//         return (`Insufficient funds!`);
//     }
//  }
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// *******************   1  ****************

// function slugify(title) {
//     const message = title.split(" ");
//     const slugMess = message.join("-");
//     return (slugMess.toLowerCase());
//  }

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

//********************* Задача 1. Пакування товарів */

// function isEnoughCapacity(products, containerSize) {
//   let sum = 0;
//   for (const key in products) {
//     sum += products[key];
//   }
//    if (sum <= containerSize) {
//      return "true";
//    } else {
//      return "false";
//    }
// }

// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// );

// **************  Задача 1. Імена користувачів  ********
// Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр
// users — масив об’єктів користувачів.Функція має повертати масив імен усіх
// користувачів(властивість name) із масиву users.

const getUserNames = (users) => {
  const newName = users.map((elem, idx) => {
    return elem.name;
  });
   return newName;
};

 console.log(
  getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
  },
])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
