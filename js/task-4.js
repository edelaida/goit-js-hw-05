// ************** Задача 4. Доставка товару
//
// function getShippingCost(country) {
//     let price;
//     switch (country) {
//         case `China`:
//             price = 100;
//             return (`Shipping to ${country} will cost ${price} credits`);
//             break;
//         case `Chile`:
//             price = 250;
//             return (`Shipping to ${country} will cost ${price} credits`);
//             break;
//         case `Australia`:
//             price = 170;
//             return (`Shipping to ${country} will cost ${price} credits`);
//             break;
//         case `Jamaica`:
//             price = 120;
//             return (`Shipping to ${country} will cost ${price} credits`);
//             break;
//         default:
//             return (`Sorry, there is no delivery to your country`);
//     }
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// ***************  Задача 4. Загальний баланс *********

// Напиши стрілочну функцію getTotalBalanceByGender(users, gender),
//     яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати
// загальний баланс користувачів(властивість balance),
// стать яких(властивість gender) збігається зі значенням параметра gender.

const getTotalBalanceByGender = (users, gender) => {
  return users.filter((piople) => {
    return piople.gender === gender;
  })
  .map((sum) => {
    return sum.balance;
  })
  .reduce((acc, idx) => {
    return acc + idx;
  });  
  };

const alllUsers = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(alllUsers, "male")); // 12053

console.log(getTotalBalanceByGender(alllUsers, "female")); // 8863