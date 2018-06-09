// **Question 2**: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: `answer([1,2,3], 4)` should return `[1,3]`

function findTheNumbers(arr, target) {
  console.log('Inputs, Array: ', arr, ' Target: ', target)
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];  //returns the first two numbers whose sum equals target, does not check further
      }
    }
  }
  return 'No such pair exists in the given array';
}


// Test Cases

console.log('\nQuestion 2: Find The Numbers')

console.log('Answer: ', findTheNumbers([1, 2, 3], 4));

console.log('Answer: ', findTheNumbers([1,2,3,4,5,6,7], 7))
