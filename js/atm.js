
//short form for document.getElementById()
var docById = function( id ) { return document.getElementById( id ); };

var balance1 = parseFloat(docById('balance1').innerHTML.replace(/[$,]+/g,""));
var balance2 = parseFloat(docById('balance2').innerHTML.replace(/[$,]+/g,""));

// * Keep track of the checking and savings balances somewhere
var bank = {
  checking : {type: 'checking', balance: balance1} ,
  savings : {type: 'savings', balance: balance2}
}
console.log(bank);

var getBalanceId = function(elem) {
  return (elem === "checkingAmount") ? docById('balance1') : docById('balance2');
}
var stripValue = function(elem) {
  return parseFloat(docById(elem).value.replace(/[$,]+/g,""));
}

var getTotalBankBalance = function () {
  var totalBalance = 0;
  //var currentbankInfo = {};
  for(var key in bank) {
    var value = bank[key];
    console.log(value.type + ": " + value.balance);
    totalBalance += value.balance;
  }
  console.log("totalBalance: " + totalBalance);
  return totalBalance;
}

// function to deposit, pass in the type of account, and which elem was click
var deposit = function (type, elem, amount) {
  // get value from input box and convert it to numbers. Allow floating numbers. 
  // strip of any dollar signs.
  // param: amount can be optional
  var amount = (amount) ? parseFloat(amount) : stripValue(elem);
  
  // check input validation
  if(inputValidation(amount)) {
    bank[type].balance += amount;
    return setCheckBalance(bank[type].balance, elem);
  } else {
    alert('It Needs to be a number');
    return false;
  }
}

var withdraw = function (type, elem, amount) {
  console.log(typeof amount);
  var amount = (amount) ? parseFloat(amount) : stripValue(elem);
  console.log(amount);
  // check input validation
  if(inputValidation(amount)) {

    
    if(bank[type].balance <= 0) {
      console.log("insufficient fund in this account");
      var totalBankBalance = getTotalBankBalance();
      console.log("totalBankBalance = " + totalBankBalance);
      if(totalBankBalance > 0) {
        console.log("i have money in other account");
        
        return false;
      } else {
        alert("You don't have the money to withdraw");
        return false;
      }
    } else {
      bank[type].balance -= amount;
      return setCheckBalance(bank[type].balance, elem);
    } 
      
  } else {
    alert('It Needs to be a number');
    return false;
  }
}

var transfer = function (type, elem, transerType, transferElem) {

  var amount = stripValue(elem);
  var transferAmount = stripValue(transferElem)

  if(amount) {
    deposit(transerType, transferElem, amount);  
    withdraw(type, elem, amount);
    return true;
  } else {
    alert('Please enter a value for ' + type + ' transfer amount');
    return false;
  }
  
  
}

var noMoreMoney = function(elem) {
  var balanceHtml = getBalanceId(elem);
  balanceHtml.classList.add("zero");
}

var iHaveMoney = function(elem) {
  var balanceHtml = getBalanceId(elem);
  balanceHtml.classList.remove("zero");
}

var setCheckBalance = function(newBalance, elem) {
  // get balance html
  var balanceHtml = getBalanceId(elem);

  //combine new value with $ symbol
  this.newBalance = '$' + newBalance.toString();

  // assign new balance into html
  balanceHtml.innerHTML = this.newBalance;

  // based on new balance check whether there is value and change the element color accordingly
  (newBalance > 0) ? iHaveMoney(elem) : noMoreMoney(elem);
  return true;
}

// validate input is a number.
function inputValidation(input) {
  return (!isNaN(input)) ?  true :  false;
}

// * Add functionality so that a user can withdraw money from one of the bank accounts.

