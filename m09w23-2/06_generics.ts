interface Container<T> {
  name: string;
  contents: T;
  arr?: T[];
  helperFunc?: () => T
}

const stringContainer: Container<string> = {
  name: 'string container',
  contents: 'hello world',
};

const booleanContainer: Container<boolean> = {
  name: 'boolean container',
  contents: false,
};