// name, arguments/params, return value

// import {Dog} from './02_objects';

const sayHello = (name?: string, age: number = 53): void => {
  // return true;
};

const returnVal1 = sayHello('alice', 42);
const returnVal2 = sayHello();

console.log('hello world');

const returningPromise = (num: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve('it worked!!');
  });
};

returningPromise(42)
  .then((data) => {})
