// add event listener to button

checkingDeposit.addEventListener('click', 
  function() {
    this.accountType = "checking";
    this.element = "checkingAmount";
    return deposit(this.accountType, this.element);
  }
);

checkingWithdraw.addEventListener('click', 
  function() {
    this.accountType = "checking";
    this.element = "checkingAmount";
    return withdraw(this.accountType, this.element);
  }
);

checkingTransfer.addEventListener('click', 
  function() {
    this.accountType = "checking";
    this.element = "checkingAmount";
    this.transfer = "savingsAmount";
    this.accountTypeTransfer = "savings";
    return transfer(this.accountType, this.element, this.accountTypeTransfer, this.transfer);
  }
);

savingsDeposit.addEventListener('click', 
  function() {
    this.accountType = "savings";
    this.element = "savingsAmount";
    return deposit(this.accountType, this.element);
  }
);

savingsWithdraw.addEventListener('click', 
  function() {
    this.accountType = "savings";
    this.element = "savingsAmount";
    return withdraw(this.accountType, this.element);
  }
);

savingsTransfer.addEventListener('click', 
  function() {
    this.accountType = "savings";
    this.element = "savingsAmount";
    this.transfer = "checkingAmount";
    this.accountTypeTransfer = "checking";
    return transfer(this.accountType, this.element, this.accountTypeTransfer, this.transfer);
  }
);
