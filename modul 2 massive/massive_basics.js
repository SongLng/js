







// fruits[0] = 'potato';
// console.table(fruits);

// console.log(fruits[2]);

const fruits = ['kiwi', 'apple', 'melon', 'plum'];
const lastIndex = fruits.length - 1;

//* перебрать изменить */

// for (let i = 0; i <= lastIndex; i += 1){
//     fruits[i] += '-1';       
// }

//* перебрать  */

for (const fruit of fruits) {
    console.log(fruit);
}
//  console.log(fruits); 




/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// friends[1] = 'qwerqrwr';
// friends[3] = 123123;

// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);

// console.log([1, 2, 3] === [1, 2, 3]);

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

for (let i = 0; i < friends.length; i += 1) {
  friends[i] += `-${i}`;
}

// for (let friend of friends) {
//   console.log(friend);
// }

console.table(friends);