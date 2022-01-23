//  function findLongestWord(string) { 
// let newString = string.split(" ");
// let longestWord;
// let longestlength= 0;
// for(let i=0; i<newString.length; i+=1){
// if(newString[i].length > longestlength){
//   longestlength = newString[i].length;
//   longestWord= newString[i];
//  }
//   }
//  return longestWord;
//   }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
// console.log(findLongestWord("Google do a roll"))
// console.log(findLongestWord("May the force be with you"))


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for(let i =min; i<=max; i+=1){
//     console.log(i)
//     numbers.push(i)
// }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3))
// createArrayOfNumbers(14, 17)

// function filterArray(numbers, value) {
//    // Change code below this line
// let number = []
// for(i = 0; i < numbers.length; i+=1 ){
//     if (numbers[i] > value) {
//      number.push(numbers[i])
//  }
// }
// return number
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))
// console.log(filterArray([1, 2, 3, 4, 5], 5))
// console.log(filterArray([12, 24, 8, 41, 76], 38))



// function getCommonElements(array1, array2) {
//   // Change code below this line
// let common = []
// for (key of array1){
//   if(array2.includes(key)){
//     common.push(key)
//   }
    
// }
// return common
// }


// console.log(getCommonElements([1, 2, 3], [2, 4]))
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (price of order) {
//     total += price;
//   }

//   // Change code above this line
//   return total;
// }


// console.log(calculateTotalPrice([12, 85, 37, 4]))


// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (number of numbers) {
  
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }


// console.log(filterArray([1, 2, 3, 4, 5], 3))


// function getEvenNumbers(start, end) {
//    // Change code below this line
// let even =[]

// for(let i = start; i <= end; i+=1){
//   if(i % 2 === 0){
//     even.push(i)
//   }

// }

//   return even
//     // Change code above this line
//   }
  
// console.log(getEvenNumbers( 7, 9));
// console.log(getEvenNumbers( 55, 66));
// console.log(getEvenNumbers(55,77));


function includes(array, value) {
  // Change code below this line
for(number of array){
    if (number === value) {
        
        return true
    }
}
    
return false
  // Change code above this line
}


console.log(includes([1, 2, 3, 4, 5], 3))
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"))
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"))