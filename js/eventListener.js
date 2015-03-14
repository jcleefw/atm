/* All event listener */
checkingDeposit.addEventListener('click', function() { 
  var checkingAmount = stripValue('checkingAmount');
  return bank.checking.deposit(checkingAmount);
});

checkingWithdraw.addEventListener('click', function() { 
  var checkingAmount = stripValue('checkingAmount');
  return bank.checking.withdraw(checkingAmount);
});

checkingTransfer.addEventListener('click', function() { 
  var checkingAmount = stripValue('checkingAmount');
  return bank.checking.transfer(checkingAmount);
});


savingsDeposit.addEventListener('click', function() { 
  var savingsAmount = stripValue('savingsAmount');
  return bank.savings.deposit(savingsAmount);
});

savingsWithdraw.addEventListener('click', function() { 
  var savingsAmount = stripValue('savingsAmount');
  return bank.savings.withdraw(savingsAmount);
});

savingsWithdraw.addEventListener('click', function() { 
  var savingsAmount = stripValue('savingsAmount');
  return bank.savings.transfer(savingsAmount);
});