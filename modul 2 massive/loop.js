// for (initialization; условие; пост - выражение){
    // тело цикла
// }


// for (let i = -100;  i < 100 ; i += 1){
//     console.log(i);
// }
// console.log("передаётся за цикл")


/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */


// сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4; 

// let totalSalary = 0;

// перебрать работников в цикле

// for (let i = 0; i < employees; i += 1){
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`Зп работника ${i} - ${salary}`)

//     totalSalary += salary;
// }
// console.log(`Total salary: `, totalSalary)

// сгенерить случ зарплату

// прибавить к тоталу

// лог


/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

//вары

const min = 6;
const max = 13;
let total = 0;


// фор от мин до макс с шагом в один 

// проверяем остаток от деления

// пишем в сумму


// for (let i = min; i <= max; i += 1){
    // console.log(i)
//     if (i % 2 === 0) {
//         console.log('чётное: ', i)
//     }

//     total += i;
    // else {
    //     console.log('не чётное ', i)
    // }
// }
// console.log('total: ', total)


for (let i = min; i <= max; i += 1){
    // console.log(i)
    if (i % 2 !== 0) {
        console.log('не чётное: ', i);
        continue;
    }
   console.log('чётное: ', i)
    total += i;
 
}
console.log('total: ', total)