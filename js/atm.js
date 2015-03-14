
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

var getCheckBalanceId = function() {
  return docById('balance1');
}

// function to deposit, pass in the type of account, and which elem was click
function deposit(type, elem) {
  // get value from input box and convert it to numbers. Allow floating numbers. 
  // strip of any dollar signs.
  var checkingAmount = parseFloat(docById(elem).value.replace(/[$,]+/g,""));
  
  // check input validation
  if(inputValidation(checkingAmount)) {
    bank[type].balance += checkingAmount;
    return setCheckBalance(bank[type].balance, elem)
  } else {
    alert('It Needs to be a number');
    return false;
  }
}

function withdraw(type, elem) {
  var checkingAmount = parseFloat(docById(elem).value.replace(/[$,]+/g,""));

  // check input validation
  if(inputValidation(checkingAmount)) {

    bank.checking.balance -= checkingAmount;
    if(bank.checking.balance < 0) {
      alert("You don't have the money to withdraw");
      return false;
    } else {
      return setCheckBalance(bank.checking.balance, elem);
    }
      
  } else {
    alert('It Needs to be a number');
    return false;
  }
}

var noMoreMoney = function(elem) {
  console.log(docById("balance1"));
  if(elem=== "checkingAmount") {
    docById("balance1").classList.add("zero");
    return true;
  } else if(elem=== "savingsAmount") {
    docById("balance2").classList.add("zero");
    return true;
  } else {
    return false;
  }
}

var iHaveMoney = function(elem) {
  console.log(elem);
  if(elem=== "checkingAmount") {
    docById("balance1").classList.remove("zero");
    return true;
  } else if(elem==="savingsAmount") {
    docById("balance2").classList.remove("zero");
    return true;
  } else {
    return false;
  }

}

var setCheckBalance = function(newBalance, elem) {
  
  this.newBalance = '$' + newBalance.toString();
  document.getElementById('balance1').innerHTML = this.newBalance;
  (newBalance > 0) ? iHaveMoney(elem) : noMoreMoney(elem);
  return true;
}

// validate input is a number.
function inputValidation(input) {
  return (!isNaN(input)) ?  true :  false;
}

// * Add functionality so that a user can withdraw money from one of the bank accounts.

