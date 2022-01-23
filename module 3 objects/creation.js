/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */



const playlist = {
    name: 'My super playlist',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3', 'track-4', 'track-5',],
    trackCount: 5,
    
} 
console.log(playlist.name)
console.log(playlist.tracks)


/*
 * Короткая запись свойств
 */
const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
  username,
  email,
};

/*
 * Вычисляемые свойства
 */

//  <input name="color" value="tomato" >

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};

// console.log(colorPickerData);


/*
 * Ссылочный тип {} === {}
 */

// console.log({ a: 1 } === { a: 1 });
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.hello = 100;
// b.hello = 150;

// console.log(a);
// console.log(b);


/*
 * Массивы и функции это объекты
 */