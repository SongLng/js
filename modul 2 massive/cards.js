/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];

// console.table(cards)

// const cardToRemove = 'card-3';

// const index = cards.indexOf(cardToRemove)
// console.log(index)

// cards.splice(index, 1)

// console.table(cards)


// const cardToInsert = 'card-6'
// const index = 3

// cards.splice(index, 0, cardToInsert)

// console.table(cards)

const cardToUpdate = 'card-4';

// cards.splice(1, 1, 555)

const index = cards.indexOf(cardToUpdate)

console.table(index)

cards.splice(index, 1, 'updated card 4')

console.table(cards)