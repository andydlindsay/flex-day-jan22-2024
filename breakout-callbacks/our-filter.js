const ourFilter = (arr, callback) => {
  // create a brand new array
  const output = [];
  
  // loop through the provided array
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    // call the provided callback with each element of the array AND capture the return value
    const returnVal = callback(element, i, arr);

    // if the return value is truthy, we add the element to our new array
    if (returnVal) {
      output.push(element);
    }
  }

  // return our new array
  return output;
};

const nums = [1,2,3,4,5];
const testFunction = (num, index) => {
  console.log(num, index);
  return num % 2 === 0; 
};

const ourFiltered = ourFilter(nums, testFunction);
const builtInFiltered = nums.filter(testFunction);

// arr.filter().map().reduce();

console.log(ourFiltered);
console.log();
console.log(builtInFiltered);
