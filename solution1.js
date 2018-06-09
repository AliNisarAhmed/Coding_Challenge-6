// **Question 1**: Clean the room function: given an input of `[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]`, make a function that organizes these into individual array that is ordered. 

// For example `answer(ArrayFromAbove)` should return: `[[1,1,1,1],[2,2], 4,5,10,[20,20], 391, 392,591]`. Bonus: Make it so it organizes strings differently from number types. i.e. `[1, "2", "3", 2]` should return `[[1,2], ["2", "3"]]`

function advancedSort(arr) {
  arr.sort((a, b) => a - b);

  let temp = [];
  let subArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i + 1]) {
      subArr.push(arr[i]);
      continue;
    } else {
      if(subArr.length) {
        subArr.push(arr[i]);
        temp.push(subArr);
        subArr = [];
        continue;
      }
      temp.push(arr[i]);
    }
  }

  return temp;


}


// Test Cases

console.log('Question 1: Test Cases')

console.log(advancedSort([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20])); 
  // returns [[1, 1, 1, 1]]

console.log(advancedSort([1,2,3, 100, 100, 50, 45, 65, 89, 100, 23, 45, 45, 60]));