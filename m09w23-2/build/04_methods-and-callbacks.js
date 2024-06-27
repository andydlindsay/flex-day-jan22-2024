"use strict";
const agatha = {
    penName: 'agatha christie',
    books: [],
    writeBook: (title) => {
        return true;
    }
};
const higherOrderFunc = (name, callback, age) => {
    const returnVal = callback(true);
};
// higherOrderFunc((arg1: boolean) => {
//   return 'hello';
// });
