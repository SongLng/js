/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */


const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';
// let message;

// for (let i = 0; i < logins.length; i += 1){
//     login = logins[i];
//     console.log(login);
//     if (login !== loginToFind) {
//         message = `Пользователь ${loginToFind} не найден`;
//     }
//     else {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }


// for (let i = 0; i < logins.length; i += 1){
//     login = logins[i];
//    console.log(`${login} === ${loginToFind}:`, login === loginToFind)
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
//     else {
//         message = `Пользователь ${loginToFind} не найден`;
//     }
// }


// for (let login of logins) {
     
//      console.log(`${login} === ${loginToFind}:`, login === loginToFind)
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }

const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`;


console.log(message)