// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];

// let mass = []

// for (let i = 0; i < fruts.length; i++) {
    
//     mass.push(fruts[i]['name'])
// }
// console.log(mass)


// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let num = 2; num <= 10; num++) {
//     if (num % 2 === 0) {
//         console.log(num)
//     }
// }

// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }
// let i = 0;
// while (i < 5) {
//     console.log(`цифра ${i}!`);
//     i++;

// }

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
// let name = prompt("Ввести число більше за 100");
// let number;

// do {
//     number = prompt("Ввести число більше за 100");
    
//     if (number === null || number === '') {
//         break;
//     }

//     number = Number(number);

// } while (number <= 100 && !isNaN(number));


// -- 5 --
// Вирахуйте середній вік
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];

// sum_all = 0;

// for (let i = 0; i < girls.length; i++) {
    
//     sum_all += girls[i]['age']

// }
// console.log(Math.round(sum_all / girls.length))