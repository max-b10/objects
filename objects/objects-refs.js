let myAccount = {
  name: "Bob",
  expenses: 0,
  income: 0,
  balance: 0,
};
// Functions:
let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
  account.balance = account.balance - amount;
};
let addIncome = function (account, amount) {
  account.income = account.income + amount;
  account.balance = account.balance + amount;
};
let resetAccount = function (account) {
  account.income = 0;
  account.expenses = 0;
  account.balance = 0;
};
let getAccountSummary = function (account) {
  console.log(
    `${account.name}'s account has a balance of $${account.balance}. The expenses total $${account.expenses} and the income is $${account.income}.`
  );
};

// Function calls:
addExpense(myAccount, 10);
addIncome(myAccount, 50);
// resetAccount(myAccount);
getAccountSummary(myAccount);
console.log(myAccount);
