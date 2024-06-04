import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user = {
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    userType: ''
  };

  onSubmit() {
    console.log('User:', this.user);
    alert('Form Submitted! Check console for user data.');
  }
}
