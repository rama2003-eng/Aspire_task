var bankAccounts = [
    { accountNumber: "123456789", ownerName: "John Doe", balance: 5000 },
    { accountNumber: "987654321", ownerName: "Jane Smith", balance: 8000 },
    { accountNumber: "456789123", ownerName: "Alice Johnson", balance: 3000 }
];
console.log("List of Bank Accounts:");
bankAccounts.forEach(function (account) { return console.log("Account Number: ".concat(account.accountNumber, ", Owner: ").concat(account.ownerName, ", Balance: ").concat(account.balance)); });
var newAccount = { accountNumber: "789123456", ownerName: "Bob Brown", balance: 6000 };
bankAccounts.push(newAccount);
console.log("\nUpdated List of Bank Accounts:");
bankAccounts.forEach(function (account) { return console.log("Account Number: ".concat(account.accountNumber, ", Owner: ").concat(account.ownerName, ", Balance: ").concat(account.balance)); });
