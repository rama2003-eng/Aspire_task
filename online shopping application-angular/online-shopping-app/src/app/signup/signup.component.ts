// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { FormsModule } from '@angular/forms';
// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.css'
// })
// export class SignupComponent {
//   name: string = '';
//   email: string = '';
//   password: string = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   signUp(): void {
//     this.authService.signUp(this.email, this.password, this.name).subscribe(
//       user => {
//         this.router.navigate(['/login']);
//       },
//       error => {
//         console.error('Signup failed', error);
//       }
//     );
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  signupFailed: boolean = false;
  signupSuccess: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  signUp(): void {
    if (this.name && this.email && this.password) {
      this.authService.checkUserExists(this.email).subscribe(exists => {
        if (exists) {
          this.signupFailed = true;
          this.signupSuccess = false;
          this.errorMessage = 'User already exists!';
        } else {
          this.authService.registerUser(this.name, this.email, this.password).subscribe(success => {
            if (success) {
              this.signupSuccess = true;
              this.signupFailed = false;
              setTimeout(() => {
                this.router.navigate(['/login']);
              }, 2000);
            } else {
              this.signupFailed = true;
              this.signupSuccess = false;
              this.errorMessage = 'Failed to register!';
            }
          });
        }
      });
    } else {
      this.signupFailed = true;
      this.signupSuccess = false;
      this.errorMessage = 'All fields are required!';
    }
  }
}
