/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */


const title = 'top 10 benefits of React work';

const normalizedTitle = title.toLocaleLowerCase();
// console.log(normalizedTitle)

const words = normalizedTitle.split(' ');

// console.log(words)

const slug = words.join('-')

// console.log(slug)

const slugShort = title.toLocaleLowerCase().split(' ').join('-')


console.log(slugShort)