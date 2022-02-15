// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект
//  и выводит в консоль все ключи и значения только собственных свойств.
//   Данная функция не должна возвращать значение.

//   Решение:

const person = {

    city: "Moscow",
    country: "Russia"
}

const student = Object.create(person);

student.ownCity = "Piter";
student.age = 25;
student.Name = "Ivan";

function ownPoperty(obj) {

    for (let key in obj) {

        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        }
    }
}

// console.log(student);
ownPoperty(student);