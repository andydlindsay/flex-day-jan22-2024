export interface Dog {
  id?: number;
  name: string;
  age: number;
}

const myDog: Dog = {} as Dog;

myDog.name = 'Dioji';
myDog.age = 10;

const dogs: Dog[] = [];
dogs.push(myDog);
const myOtherDog = dogs.pop();
