//title : Method Overloading(CompileTime Polymorphism)
//Author:Ramapraba J
//Created Date:2-04-2024
public class Bank {
    
    public void deposit(double amount) {
        System.out.println("Depositing $" + amount + " into account.");
        
    }
    
   
    public void deposit(double amount, String currency) {
        System.out.println("Depositing " + currency + " " + amount + " into account.");
        
    }
    
   
    
    public static void main(String[] args) {
        Bank bank = new Bank();
        
       
        bank.deposit(100);
        
       
        bank.deposit(200, "€");
    }
}
