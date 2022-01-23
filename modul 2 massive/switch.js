// switch, if else 



// const stars = 3;
// let price;


// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// }else if (stars === 3) {
//     price = 40;
// }else if (stars === 4) {
//     price = 50;
// }else if (stars === 5) {
//     price = 60;
// }
// else {
//     console.log('иди нах');
// }


// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 40;
//         break;
//     case 4:
//         price = 50;
//         break;
//     default:
//         console.log("pidaras");
// }


// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;

// }else if (stars === 5) {
//     price = 60;
// }
// else {
//     console.log('иди нах');
// }
//    console.log(price);

// switch (stars) {
//     case 1:
//         case 2:
//         price = 20;
//         break;
    
//     case 3:
//           case 4:
//         price = 40;
//         break;
//     case 5:
//         price = 50;
//         break;
//     default:
//         console.log("takogo net");
// }
//    console.log(price);

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

// 1 сделать переменные

const option = 2;
let message;

// 2 сделать switch
switch (option) {
    case 1:
        message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
        break;
    case 2:
        message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
    case 3:
        message = 'Посылка будет отправлена сегодня';
    default:
        message = 'Вам перезвонит менеджер';
 
}

console.log(message)
// 3 в каждом case записать в message  


// 4 сделать лог message 