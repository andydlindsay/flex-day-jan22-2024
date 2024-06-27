"use strict";
// name, arguments/params, return value
// import {Dog} from './02_objects';
const sayHello = (name, age = 53) => {
    // return true;
};
const returnVal1 = sayHello('alice', 42);
const returnVal2 = sayHello();
console.log('hello world');
const returningPromise = (num) => {
    return new Promise((resolve, reject) => {
        resolve('it worked!!');
    });
};
returningPromise(42)
    .then((data) => { });
