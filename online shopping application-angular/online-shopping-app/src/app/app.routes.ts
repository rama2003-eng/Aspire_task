import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule,} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guards';
import { PaymentComponent } from './payment/payment.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'product-details/:id', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
    { path: 'order-history', component: OrderHistoryComponent, canActivate: [AuthGuard] },
    { path: 'payment', component: PaymentComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', redirectTo: '/home' }
];
