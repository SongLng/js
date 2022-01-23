

/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

const logItems = function (items) {
    for (let item of items) {
        console.log(item)
    }
}

logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);