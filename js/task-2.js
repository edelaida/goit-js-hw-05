// function getShippingMessage(country, price, deliveryFee) {
//     const totalPrice = (price + deliveryFee);
//     return(`Shipping to ${country} will cost ${totalPrice} credits`)
// }
// console.log(getShippingMessage("Australia", 120, 50));
// console.log(getShippingMessage("Germany", 80, 20));
// console.log(getShippingMessage("Sweden", 100, 20));


// ********************* Задача 2. Форматування повідомлення **********

// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         return (message);
//     } else {
//         message = message.slice(0, maxLength);
//         return (`${message}...`);
//     }
//   }
    
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// ****************** 2  ****************

// function makeArray(firstArray, secondArray, maxLength) {
//     const newArray = [];
//     let num = firstArray.length;
//     for (let i = 0; i < maxLength; i++) {
//        if (i < firstArray.length) {
//            newArray.push(firstArray[i]);
//        } else {
//            let j = i - num;
//            newArray.push(secondArray[j]);
//        }
//    }
//     return newArray;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// ****************** Задача 2. Розрахунок калорій **********

// function calcAverageCalories(days) {
//   let ration = 0;
//   let number = 0;
//   for (const key of days) {
//     ration += key.calories;
//     number += 1;
//   }
//   if (number > 0) {
//      return (ration / number);
//   };
//      return number;
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0

// ***************** Задача 2. Користувачі з другом *******

// Напиши стрілочну функцію getUsersWithFriend(users, friendName),
//   яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів
// другий параметр friendName — ім’я друга для пошуку.
// Функція має повертати масив усіх користувачів із масиву users, у яких є друг з 
// іменем friendName.Друзі кожного користувача зберігаються у властивості friends. 
// Якщо користувачів, у яких є такий других немає, то функція має повернути порожній масив.

// Поради:
// Метод filter() можна використовувати для створення нового масиву з елементами,
//   які задовольняють певну умову.
// Використовуй метод includes() для перевірки, чи масив friends містить friendName.

const getUsersWithFriend = (users, friendName) => {
  const filtrName = users.filter((friend) => {
    if (friend.friends.includes(friendName)) {
       return friend.name;      
    };    
  }) 
  return filtrName;
}

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []