// **Question 1**: Clean the room function: given an input of `[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]`, make a function that organizes these into individual array that is ordered. 

// For example `answer(ArrayFromAbove)` should return: `[[1,1,1,1],[2,2], 4,5,10,[20,20], 391, 392,591]`. Bonus: Make it so it organizes strings differently from number types. i.e. `[1, "2", "3", 2]` should return `[[1,2], ["2", "3"]]`

function advancedSort(arr) {
  console.log("Input array: ", arr);

  arr.sort((a, b) => {
    if(typeof a === 'string' && typeof b === 'number') {
      return 1;
    } else if (typeof b === 'string' && typeof a === 'number') {
      return -1;
    } else {
      return a - b;
    }
  });

  let numberArr = subArrSort(arr.filter(num => typeof num === 'number'));

  let stringArr = subArrSort(arr.filter(str => typeof str === 'string'));


  if(stringArr.length) {
    numberArr.push(stringArr);
    return numberArr;
  } else if(!numberArr.length) {
    return stringArr;
  } else {
    return numberArr;
  }

  function subArrSort(array) {
    let temp = [];
    let subArr = [];

    for(let i = 0; i < array.length; i++) {
      if(array[i] === array[i + 1]) {
        subArr.push(array[i]);
        continue;
      } else {
        if(subArr.length) {
          subArr.push(arr[i]);
          temp.push(subArr);
          subArr = [];
          continue;
        }
        temp.push(array[i]);
      }
    }
    return temp;
  }
    


}


// Test Cases

console.log('Question 1: Advanced sort')

console.log('Answer: ', advancedSort([1,2,4,591,392,391,2,5,10, 2, 1, 1,1,20,20])); 
  // returns [[1, 1, 1, 1]]

console.log('Answer: ', advancedSort([1, "2", "3", 2, 4, 5, '4', '5']));

console.log('Answer: ', advancedSort(['1', "2", "3", '2', '4', '5', '4', '5']));
