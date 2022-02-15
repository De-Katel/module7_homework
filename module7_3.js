// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.

// Решение:


function createObject() {

    const Obj = Object.create(null);

    console.log(Obj);
}

createObject();