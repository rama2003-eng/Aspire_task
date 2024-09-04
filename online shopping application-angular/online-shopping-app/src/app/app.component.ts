import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { HomeComponent } from './home/home.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent ,HttpClientModule,CommonModule ,RouterLink,RouterOutlet, CheckoutComponent, CartComponent,LoginComponent,
    SignupComponent,ProductDetailsComponent,ProductListComponent,OrderHistoryComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online-shopping-app';
  constructor(private authService: AuthService, private router: Router) {}
  logout(): void {
    this.authService.signOut(); // Call the signOut method in your AuthService
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
}
