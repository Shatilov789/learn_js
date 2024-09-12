                                // №1
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind


// const studentInfo = {
//     name: "Pavel",
//     specialty: "Developer",
//     averageScore: "80",
//     missedClasses: "3",
//     showInfo: function (missed, average) {
//         console.log(
//             `Name: ${this.name}, specialty: ${this.specialty}, averageScore: ${average}, missedClasses:  ${missed}`
//         );

//     },

// };

// stud1 = {
//     name: "Ben",
//     specialty: "Cokker",
//     // averageScore: "95",
//     // missedClasses: "0"
// }

// stud2 = {
//     name: "Olya",
//     specialty: "Teacher",
//     // averageScore: "100",
//     // missedClasses: "1"
// }

// stud3 = {
//     name: "Max",
//     specialty: "QA",
//     // averageScore: "80",
//     // missedClasses: "4"
// }

// studentInfo.showInfo.bind(stud1, '0', '95')();
// studentInfo.showInfo.call(stud2, '1', '100');
// studentInfo.showInfo.apply(stud3, ['4', '80']);

                                // №2
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const wikiInfo = {
//     showItems() {
//         console.log(this.items);
//     }
// };

// const css = {
//     items: "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML)."
// };

// const html = {
//     items: "HTML (HyperText Markup Language) is the most basic building block of the Web."
// };

// document.querySelector('#css').addEventListener('click', wikiInfo.showItems.bind(css));
// document.querySelector('#html').addEventListener('click', wikiInfo.showItems.bind(html));

                                // №3
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4


// let shop = (name, price, quality) => {
//     sum = Number(quality) * Number(price);
//     console.log(name, sum.toFixed(2));
// }

// shop("banana", "30", "4.5")
// shop("cherry", "58", "1.3")
// shop("jrange", "89", "3.4")