import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AccountHolder} from './bank.model';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export class BankComponent {
  accountInput:string="SavingsAccount";

  holders:AccountHolder[]=[{accountNumber:23456765,accountHolderName:"Rama",typeOfAccount:"SavingsAccount",
    balance:20000,bankName:"SBI"},
  {accountNumber:23456765,accountHolderName:"Kamala",typeOfAccount:"SavingsAccount",
  balance:30000,bankName:"SBI"},
  {accountNumber:435788856,accountHolderName:"Preetha",typeOfAccount:"BusinessAccount",
  balance:40000,bankName:"HDFC"},
  {accountNumber:456898709,accountHolderName:"Priya S",typeOfAccount:"SavingsAccount",
  balance:30000,bankName:"ICICI"},
  {accountNumber:897654564,accountHolderName:"Priya K",typeOfAccount:"SalaryAccount",
  balance:70000,bankName:"SBI"},
  {accountNumber:446668687,accountHolderName:"Nithia",typeOfAccount:"BusinessAccount",
  balance:10000,bankName:"ICICI"},
  {accountNumber:546898795,accountHolderName:"Hema",typeOfAccount:"SalaryAccount",
  balance:40000,bankName:"SBI"},
  {accountNumber:452567835,accountHolderName:"Saranya",typeOfAccount:"SalaryAccount",
  balance:20000,bankName:"HDFC"},
  ];

  getStatus(balance: number): string {
    switch (true) {
      case (balance >= 10000 && balance < 20000):
        return "Inactive";
      case (balance >= 20000 && balance<= 60000):
        return "Active";
      case (balance > 60000):
        return "Loyal";
      default:
        return "Unknown";
    }
  }
}
