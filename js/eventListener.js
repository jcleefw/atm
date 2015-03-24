$(document).ready(function () {
// var checkingAmount = parseFloat(docById('checkingAmount').value.replace(/[$,]+/g,""));
// var savingsAmount = parseFloat(docById('savingsAmount').value.replace(/[$,]+/g,""));
  bank.checking.balance = parseFloat($('#balance1').html().trim().replace("$", ""));
  bank.savings.balance = parseFloat($('#balance2').html().trim().replace("$", ""));

/* All event listener */
$('#checkingDeposit').on('click', function() {
  var checkingAmount = stripValue('checkingAmount');
  return bank.checking.deposit(checkingAmount);
});

$('#checkingWithdraw').on('click', function() { 
  var checkingAmount = stripValue('checkingAmount');
  return bank.checking.withdraw(checkingAmount);
});

$('#checkingTransfer').on('click', function() { 
  var checkingAmount = stripValue('checkingAmount');
  return bank.checking.transfer(checkingAmount);
});


$('#savingsDeposit').on('click', function() { 
  var savingsAmount = stripValue('savingsAmount');
  return bank.savings.deposit(savingsAmount);
});

$('#savingsWithdraw').on('click', function() { 
  var savingsAmount = stripValue('savingsAmount');
  return bank.savings.withdraw(savingsAmount);
});

$('#savingsWithdraw').on('click', function() { 
  var savingsAmount = stripValue('savingsAmount');
  return bank.savings.transfer(savingsAmount);
});

});