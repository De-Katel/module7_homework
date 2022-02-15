// Задание 2.

// Написать функцию, которая принимает в качестве аргументов 
// строку и объект, а затем проверяет есть ли у переданного объекта 
// свойство с данным именем. Функция должна возвращать true или false.

// Решение:

const person = {

    name: "Ivan",
    city: "Moscow",
    country: "Russia",
    ownCity: "Piter",
    age: 25
}

function findKey(str, obj) {

    return (str in obj);
}

console.log(findKey('country', person));       //true
// console.log(findKey('city', person));
// console.log(findKey('name', person));
// console.log(findKey('ownCity', person));
// console.log(findKey('age', person));

console.log(findKey('blabla', person));    //false
// console.log(findKey('City', person));
