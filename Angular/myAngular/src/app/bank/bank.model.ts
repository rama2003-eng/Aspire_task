export class AccountHolder{
    accountNumber:number;
    accountHolderName:String;
    typeOfAccount:String;
    balance:number;
    bankName:String;
   


    constructor(accountNumber:number,accountHolderName:String,typeOfAccount:String,
        balance:number,bankName:String,staus:String){
       this.accountNumber=accountNumber;
       this.accountHolderName=accountHolderName;
       this.typeOfAccount=typeOfAccount;
       this.balance=balance;
       this.bankName=bankName;
      
    }
}