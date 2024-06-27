interface Writer {
  penName: string;
  books: string[];
  writeBook: (title: string) => boolean;
}

const agatha: Writer = {
  penName: 'agatha christie',
  books: [],
  writeBook: (title: string) => {
    return true;
  }
};

const higherOrderFunc = (name: string, callback: (bool: boolean) => string, age: number) => {
  const returnVal = callback(true);
};

// higherOrderFunc((arg1: boolean) => {
//   return 'hello';
// });
