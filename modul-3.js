// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for(key in apartment) {
//     keys.push(key)
//     values.push(apartment[key])
    
// }

// console.log(values)
// ["descr", "rating", "price"]



function countProps(object) {
  let propCount = 0;
  // Change code below this line
    for (key in object) {
    
  if (object.hasOwnProperty(key)){
      propCount += 1
      console.log(key)
  }
}
  // Change code above this line
  return propCount;
}


console.log(countProps({ name: "Mango", age: 2 }))  
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))  