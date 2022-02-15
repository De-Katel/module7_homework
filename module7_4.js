// Задание 4.

// Реализовать следующее консольное приложение подобно примеру,
//  который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку.
//  Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два 
// (например, настольная лампа и компьютер). Выбрав прибор, подумайте,
//  какими свойствами он обладает.

//  Решение:

function Device(title, power, color, task) {

    this.deviceType = 'electronic';
    this.power = power;
    this.deviceTitle = title;
    this.condition = 'OFF';
    this.color = color;
    this.task = task;
}

Device.prototype.switch = function () {

    this.condition = confirm(`Включить ${this.deviceTitle}?`) ? 'ON' : 'OFF';
}

Device.prototype.checkSwitch = function () {

    if (this.condition == 'ON') {
        console.log(`${this.deviceTitle} включен!  Его мощность ${this.power} Вт`)
    } else {
        console.log(`${this.deviceTitle} выключен.`)
    }
}

const computer = new Device('Компьютер', 500, 'white', 'education');

computer.ram = 8;
computer.showRam = function () {
    (console.log('Оперативная память компьютера ' + computer.ram + 'Gb'))
}

const tv = new Device('Телевизор', 400, 'black', 'entertainment');

tv.numberChannels = 1000;
tv.showNumberChannels = function () {
    (console.log('Количество каналов в телевизоре ' + tv.numberChannels))
}

const kettle = new Device('Чайник', 1000, 'silver', 'boiling');

kettle.volume = 1.7;
kettle.showVolume = function () {
    (console.log('Объем чайника ' + kettle.volume + ' л'))
}

computer.switch();
tv.switch();
kettle.switch();

computer.checkSwitch();
tv.checkSwitch();
kettle.checkSwitch();

// computer.showRam();
// tv.showNumberChannels();
// kettle.showVolume();


// console.log(computer);
// console.log(tv);
// console.log(kettle);

