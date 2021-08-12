'use strict';

//  Объект пар выключатель - лампа
let pair = {};
// Массив ламп
let lamp = ['lamp1', 'lamp2', 'lamp3'];
// Выключаем все выключатели
let switch1 = false,
    switch2 = false,
    switch3 = false;

function f1() {

    function f2() {
        // Вwключаем первый выключатель
        switch1 = false;
        // Включаем второй выключатель
        switch2 = true;
        for (let i = 0; i < lamp.length; i++) {
            // Если лампа светит
            if (lamp[i].shine) {
                pair[lamp[i]] = switch2;
                lamp.splice(lamp.indexof(lamp[i]), 1);
                break;
            }
        }
        // Сравнение температура ламп
        if (lamp[0].temp > lamp[1].temp) {
            pair[lamp[0]] = switch1;
            pair[lamp[1]] = switch3;
        } else {
            pair[lamp[0]] = switch3;
            pair[lamp[1]] = switch1;
        }
        // Вывод в консоль объекта соответствий
        console.log(pair);
    }

    // Включаем первый выключатель
    switch1 = true; 
    // Ждем 5 минут, чтобы одна лампа нагрелась
    let timer2 = setTimeout(f2, 5*60*1000);
}

// Ждем 5 минут, чтобы все лампы остыли
let timer1 = setTimeout(f1, 5*60*1000);