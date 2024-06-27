// idiom

interface LoginUser {
  username: string;
  password: string;
}

const login = (user: LoginUser): boolean => {
  user.password

  return true;
};

const myUser = {
  username: 'jstamos',
  password: '1234',
  faveTvShow: 'full house'
};

login(myUser);

