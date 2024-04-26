interface BankAccount {
    accountNumber: string;
    ownerName: string;
    balance: number;
}

const bankAccounts: BankAccount[] = [
    { accountNumber: "123456789", ownerName: "John Doe", balance: 5000 },
    { accountNumber: "987654321", ownerName: "Jane Smith", balance: 8000 },
    { accountNumber: "456789123", ownerName: "Alice Johnson", balance: 3000 }
];

console.log("List of Bank Accounts:");
bankAccounts.forEach(account => console.log(`Account Number: ${account.accountNumber}, Owner: ${account.ownerName}, Balance: ${account.balance}`));

const newAccount: BankAccount = { accountNumber: "789123456", ownerName: "Bob Brown", balance: 6000 };
bankAccounts.push(newAccount);

console.log("\nUpdated List of Bank Accounts:");
bankAccounts.forEach(account => console.log(`Account Number: ${account.accountNumber}, Owner: ${account.ownerName}, Balance: ${account.balance}`));