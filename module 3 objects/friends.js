/*
 * Работа с коллекцией (массивом объектов)
 */

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

// for (const friend of friends) {
//     console.log(friend)
// }

// console.table(friends); 


/*
 * Ищем друга по имени
 */

const findFriendByName = function (allFriends, name){}
{
    for (const friend of allFriends) {
        console.log(friend.name === name)
        if (friend.name === name) {
            return 'got u!!'
        }
    }
         return ' 没有'
}

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));


// const gotAllNames = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         console.log(friend);
//         names.push(friend.name);
//     }
//     console.log(names)
//     return names
// }
// console.log(gotAllNames(friends))
 

/*
 * Получаем имена всех друзей
 */


const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];

    for (const friend of allFriends) {
        console.log(friend)
        console.log(friend.online)

        if (friend.online) {
            onlineFriends.push(friend)
        }
    }
    return onlineFriends;
}

console.log(getOnlineFriends(friends))

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};


// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй

const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);

    // const key = friend.online ? 'online' : 'offline';
    // friendsByStatus[key].push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByStatus(friends));