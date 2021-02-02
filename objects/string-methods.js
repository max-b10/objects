// method called validPassword
// length > 8 and doens't contain 'password' return true.

let validPassword = function (password) {
  return password > 8 && !password.includes("password");
};

let good = validPassword("123456789password");
console.log(good);

// Could use if statement but it's unnecessary.
