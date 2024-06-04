import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';  // Import the UserService

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}  // Inject UserService

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      userType: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      // Use the service to handle form submission
      this.userService.submitForm(this.userForm.value);
      this.userForm.reset();
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  get passwordMatchError() {
    return (
      this.userForm.get('password')?.value !== this.userForm.get('confirmPassword')?.value &&
      this.userForm.get('confirmPassword')?.touched
    );
  }
}
