

/* global functions*/
var getTotalBankBalance = function () {
  var totalBalance = 0;
  //var currentbankInfo = {};
  for(var key in bank) {
    var value = bank[key];
    if(value.balance) {
      //console.log(value.type + ": " + value.balance);
      totalBalance += value.balance;
    }
  }
  //console.log("totalBalance: " + totalBalance);
  return totalBalance;
}

var inputValidation = function (input) {
  return (!isNaN(input) && input>0) ?  true :  false;
}

var stripValue = function(elem) {
  return parseFloat($('#'+elem).val().replace(/[$,]+/g,""));
}




/* objects */
var bank = {
  totalBalance: function() { return getTotalBankBalance() },
  checking : {
    type: 'checking', 
     // balance: parseFloat($('#balance1').html().trim().replace("$", "")),
    deposit: function(amount) { 
      if(inputValidation(amount)) {
        this.balance += amount;
        this.updateBalance();
        return true;
      } else {
        alert('It Needs to be a number or a positive value');
        return false;
      }
    },
    updateBalance: function(){
      (this.balance<=0) ? $('#balance1').addClass('zero') : $('#balance1').removeClass('zero');
      $('#balance1').text('$' + this.balance);
      return true ;
    },
    withdraw: function(amount) {
      
      var message = "insufficient fund in this account";
      var totalBalance = bank.totalBalance();
      
      if(inputValidation(amount)) {
        if (this.balance <= 0) {
          if(totalBalance > 0 && totalBalance >= amount) {
            bank.savings.transfer(amount);
            this.withdraw(amount);
            return this.updateBalance();
          } else {
            console.log(message);
            return false;
          }
        } else {
          this.balance -= amount;
          return this.updateBalance();
        }

      } else {
        alert('It Needs to be a number');
        return false;
      }
      
    }, 
    transfer: function(amount) {
      var success = this.withdraw(amount);
      (success) ? bank.savings.deposit(amount) : console.log("Transfer failed.");
    }
  } ,
  savings : {
    type: 'savings', 
    // balance: balance2,
    deposit: function(amount) { 
      if(inputValidation(amount)) {
        this.balance += amount;
        this.updateBalance();
        return true;
      } else {
        alert('It Needs to be a number');
        return false;
      }
    },
    updateBalance: function(){
      (this.balance<=0) ? docById('balance2').classList.add('zero') : docById('balance2').classList.remove('zero');
      docById("balance2").innerHTML = '$' + this.balance.toString();
      return true;
    },
    withdraw: function(amount) {
      
      var message = "insufficient fund in this account";
      var totalBalance = bank.totalBalance();
      
      if(inputValidation(amount)) {
        if (this.balance <= 0) {
          if(totalBalance > 0 && totalBalance >= amount) {            
            bank.checking.transfer(amount);
            this.withdraw(amount);
            return this.updateBalance();
          } else {
            console.log(message);
            return false;
          }
        } else {
          this.balance -= amount;
          return this.updateBalance();
        }

      } else {
        alert('It Needs to be a number');
        return false;
      }
      
    }, 
    transfer: function(amount) {
      var success = this.withdraw(amount);
      (success) ? bank.checking.deposit(amount) : console.log("Transfer failed.");
    }
  }
}






