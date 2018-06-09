// **Question 2**: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: `answer([1,2,3], 4)` should return `[1,3]`

function findTheNumbers(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
}


// Test Cases

console.log('Question 2: Test Cases')

console.log(findTheNumbers([1, 2, 3], 4));

console.log(findTheNumbers([1,2,3,4,5,6,7], 13))