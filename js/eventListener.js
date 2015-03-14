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
