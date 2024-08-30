// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3

// let num = 0;

// if (num < 0) {
//     console.log("false")
// } else {
//     console.log("true")
// }

// ______________________________________
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true
// let word = "21";

// typeof word === 'string' ? console.log("true") : console.log("false");

// ______________________________________
// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль

// let number = 16;

// Number(number) <= 5 ? console.log(Number(number) + 5) : console.log(Number(number) - 5);

// ______________________________________
//Перевірте це на варіантах 1, 10, 13.
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let month = 13;

// switch (month) {
//     case 1:
//         console.log("Січень")
//         break;
//     case 2:
//         console.log("Лютий")
//         break;
//     case 3:
//         console.log("Березень")
//         break;
//     case 4:
//         console.log("Квітень")
//         break;
//     case 5:
//         console.log("Травень")
//         break;
//     case 6:
//         console.log("Червень")
//         break;
//     case 7:
//         console.log("Липень")
//         break;
//     case 8:
//         console.log("Серпень")
//         break;
//     case 9:
//         console.log("Вересень")
//         break;
//     case 10:
//         console.log("Жовтень")
//         break;
//     case 11:
//         console.log("Листопад")
//         break;
//     case 12:
//         console.log("Грудень")
//         break;
//     default:
//         console.log("Write correct number of month!!!")
// }


// ______________________________________
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let number = 123;
// let sum = number.toString()
//                  .split('')
//                  .map(Number)
//                  .reduce((acc, digit) => acc + digit, 0);

// console.log(sum);  // Вывод: 6
