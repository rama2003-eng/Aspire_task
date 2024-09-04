// // import { Component } from '@angular/core';
// // import { Router } from '@angular/router';
// // import { AuthService } from '../services/auth.service';
// // import { FormsModule } from '@angular/forms';
// // import { HttpClientModule } from '@angular/common/http';
// // import { RouterLink } from '@angular/router';
// // import { CommonModule } from '@angular/common';
// // @Component({
// //   selector: 'app-login',
// //   standalone: true,
// //   imports: [CommonModule,RouterLink, FormsModule, HttpClientModule],
// //   templateUrl: './login.component.html',
// //   styleUrls: ['./login.component.css']
// // })
// // export class LoginComponent {
// //   email: string = '';
// //   password: string = '';
// //   loginFailed: boolean = false;
// //   loginSuccess: boolean = false;

// //   constructor(private authService: AuthService, private router: Router) {}

// //   login(): void {
// //     this.authService.signIn(this.email, this.password).subscribe(
// //       user => {
// //         this.loginSuccess = true;
// //         this.loginFailed = false;
// //         setTimeout(() => {
// //           this.router.navigate(['/home']);
// //         }, 2000); // Navigate to home after 2 seconds
// //       },
// //       error => {
// //         console.error('Login failed', error);
// //         this.loginFailed = true;
// //         this.loginSuccess = false;
// //       }
// //     );
// //   }
// // }
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterLink } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import {  ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [ActivatedRoute,CommonModule, RouterLink, FormsModule, HttpClientModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   email: string = '';
//   password: string = '';
//   loginFailed: boolean = false;
//   loginSuccess: boolean = false;

//   constructor(private router: Router, private authService: AuthService) {}

//   login(): void {
//     if (this.email && this.password) {
//       this.authService.login(this.email, this.password).subscribe(success => {
//         if (success) {
//           this.loginSuccess = true;
//           this.loginFailed = false;
//           setTimeout(() => {
//             this.router.navigate(['/home']);
//           }, 2000);
//         } else {
//           this.loginFailed = true;
//           this.loginSuccess = false;
//         }
//       });
//     } else {
//       this.loginFailed = true;
//       this.loginSuccess = false;
//     }
//   }
// }
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginFailed: boolean = false;
  loginSuccess: boolean = false;
  returnUrl: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Capture the return URL from query parameters (default to home if not available)
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  login(): void {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe(success => {
        if (success) {
          this.loginSuccess = true;
          this.loginFailed = false;
          setTimeout(() => {
            this.router.navigate([this.returnUrl]);
          }, 2000);
        } else {
          this.loginFailed = true;
          this.loginSuccess = false;
        }
      });
    } else {
      this.loginFailed = true;
      this.loginSuccess = false;
    }
  }
}
