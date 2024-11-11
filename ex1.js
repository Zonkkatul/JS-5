const account = {
    accountName: "John Doe", 
    balance: 1000,           
  
    
    getBalance: function () {
      console.log(`Total balance: $${this.balance}`);
    },
  
  
    deposit: function (amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
      } else {
        this.accountError("Invalid deposit amount.");
      }
    },
  
    
    withdrawal: function (amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
      } else {
        this.accountError("Invalid withdrawal amount or insufficient funds.");
      }
    },
  
    
    getAccountName: function () {
      console.log(`Account Holder: ${this.accountName}`);
    },
  
    
    accountError: function (message) {
      console.log(`Error: ${message}`);
    }
  };