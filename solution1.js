// **Question 1**: Clean the room function: given an input of `[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]`, make a function that organizes these into individual array that is ordered. 

// For example `answer(ArrayFromAbove)` should return: `[[1,1,1,1],[2,2], 4,5,10,[20,20], 391, 392,591]`. Bonus: Make it so it organizes strings differently from number types. i.e. `[1, "2", "3", 2]` should return `[[1,2], ["2", "3"]]`

function advancedSort(arr) {
  console.log("Input array: ", arr);

  let numberArr = subArrSort(arr.sort((a, b) => a - b).filter(num => typeof num === 'number'));  //Sorts the input array in ascending order and filters out strings

  let stringArr = subArrSort(arr.sort((a, b) => a - b).filter(str => typeof str === 'string')); // sorts the input array in ascending order and filters out the numbers


  //  The code below returns an array if it consisits of numbers only, otherwise returns number array with string array pushed ot the last, else returns advancedSorted Array consisting of strings only

  if(stringArr.length) {
    numberArr.push(stringArr);
    return numberArr;
  } else if(!numberArr.length) {
    return stringArr;
  } else {
    return numberArr;
  }


  

  function subArrSort(array) {
    let temp = [];  // the answer array
    let subArr = []; // temporary array used to hold same numbers

    for(let i = 0; i < array.length; i++) {
      if(array[i] === array[i + 1]) { // checking if an element matches its forward neighbor
        subArr.push(array[i]); //if it does, push it into subArr 
        continue;
      } else {
        if(subArr.length) {  // if subArr.length exists, then the current element must have been matched by the last element. and it must be part of the sequence of same numbers
          subArr.push(arr[i]);
          temp.push(subArr);
          subArr = []; // reset subArr
          continue;
        }
        temp.push(array[i]); // if subArr.length is zero, it means the current element is a new number, and hence added directly to temp
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
