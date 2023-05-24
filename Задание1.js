let arr = [-7, 13, 0, 2, 10, 11, 25, 8, -10, "asdasda", "bbbbe"];
let str0 = "Первый элемент массива";
let str1 = "Количество четных элементов массива";
let str2 = "Количество нечетных элементов массива";

let arrNewNumber = arr.filter(Number.isFinite);
let getEvenElem = arrNewNumber.filter(elem => elem % 2 === 0).length;
let getOddElem = arrNewNumber.filter(elem => elem % 2 !== 0).length;

function getEvenAndOddElem() {
console.log(str0 + ": " + arr[0]);
console.log(str1 + ": "+ getEvenElem);
console.log(str2 + ": "+ getOddElem);
}

getEvenAndOddElem()