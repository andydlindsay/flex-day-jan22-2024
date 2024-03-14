const nums = [1,2,3];

const loopOverArray = (arr, callback) => {
  for (const num of arr) {
    callback(num);
  }
};

const multiplyByTwo = (num) => { return num * 2; };

loopOverArray(nums, (num) => { return num * 2; });

// in JS, functions are values, first-class functions
multiplyByTwo();
multiplyByTwo;
