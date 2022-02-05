
// запись функции

// function a() {
//     console.log('hello nigga')
// }
// a()

// a = 10;
// a()


// const myCity = {
//     city: 'Kyiv',
//     greetings() {
//         console.log('hello nigga black')
//     }
// }
// myCity.greetings()
// myCity.popular = true;
// myCity.country = 'Ukraine'
// delete myCity.city

// const newCity = 'Chongqing';
// myCity[newCity] = 'China'

// console.log(myCity)

const myCity = {
    city: 'Kyiv',
    country: 'Ukraine',
population: '50m'
}

const myCity2 = Object.assign({}, myCity);
myCity2.country = 'Chongqing'; 
console.log(myCity);

console.log(myCity2);