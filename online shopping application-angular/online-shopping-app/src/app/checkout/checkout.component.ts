// // import { Component, OnInit } from '@angular/core';
// // import { Router } from '@angular/router';
// // import { CartService } from '../services/cart.service';
// // import { OrderService } from '../services/order.service';
// // import { AuthService } from '../services/auth.service';
// // import { FormsModule } from '@angular/forms';
// // import { CommonModule } from '@angular/common';
// // import { Product } from '../models/product.model';

// // @Component({
// //   selector: 'app-checkout',
// //   standalone: true,
// //   imports: [FormsModule, CommonModule],
// //   templateUrl: './checkout.component.html',
// //   styleUrls: ['./checkout.component.css']
// // })
// // export class CheckoutComponent implements OnInit {
// //   name: string = '';
// //   phone: string = '';
// //   email: string = '';
// //   shippingAddress: string = '';
// //   shippingOption: string = 'free';
// //   paymentMethod: string = 'credit-card';
// //   discountCode: string = '';
// //   items: Product[] = [];
// //   totalPrice: number = 0;
// //   shippingCost: number = 0;

// //   constructor(
// //     private cartService: CartService,
// //     private orderService: OrderService,
// //     private authService: AuthService,
// //     private router: Router
// //   ) {}

// //   ngOnInit(): void {
// //     this.cartService.getItems().subscribe((items: Product[]) => {
// //       this.items = items;
// //       this.totalPrice = this.calculateTotalPrice(items);
// //       this.updateShippingCost();
// //     });
// //   }

// //   private calculateTotalPrice(items: Product[]): number {
// //     return items.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
// //   }

// //   private updateShippingCost(): void {
// //     this.shippingCost = this.shippingOption === 'free' ? 0 : 50; // Example shipping cost
// //   }

// //   applyDiscount(): void {
// //     if (this.discountCode === 'SAVE10') {
// //       this.totalPrice *= 0.9; // Example discount logic
// //     }
// //   }

// //   placeOrder(): void {
// //     const user = this.authService.getUser();
// //     if (!user) {
// //       alert('You need to log in to place an order.');
// //       this.router.navigate(['/login']);
// //       return;
// //     }

// //     const order = {
// //       userId: user.id,
// //       items: this.items,
// //       name: this.name,
// //       phone: this.phone,
// //       email: this.email,
// //       shippingAddress: this.shippingAddress,
// //       shippingOption: this.shippingOption,
// //       paymentMethod: this.paymentMethod,
// //       totalPrice: this.totalPrice + this.shippingCost,
// //       status: 'Processing',
// //       createdAt: new Date()
// //     };

// //     this.orderService.createOrder(order).subscribe({
// //       next: () => {
// //         this.cartService.clearCart().subscribe(() => {
// //           this.router.navigate(['/order-history']);
// //         });
// //       },
// //       error: (err) => {
// //         console.error('Error placing order:', err);
// //         alert('There was an error placing your order. Please try again.');
// //       }
// //     });
// //   }
// // }
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CartService } from '../services/cart.service';
// import { OrderService } from '../services/order.service';
// import { AuthService } from '../services/auth.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Product } from '../models/product.model';

// @Component({
//   selector: 'app-checkout',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css']
// })
// export class CheckoutComponent implements OnInit {
//   name: string = '';
//   phone: string = '';
//   address: string = '';
//   house: string = '';
//   road: string = '';
//   pincode: string = '';
//   city: string = '';
//   state: string = '';
//   landmark: string = '';
//   items: Product[] = [];
//   totalPrice: number = 0;

//   constructor(
//     private cartService: CartService,
//     private orderService: OrderService,
//     private authService: AuthService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.cartService.getItems().subscribe((items: Product[]) => {
//       this.items = items;
//       this.totalPrice = this.calculateTotalPrice(items);
//     });
//   }

//   private calculateTotalPrice(items: Product[]): number {
//     return items.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
//   }

//   saveAddressAndContinue(): void {
//     // Perform validation if necessary

//     // Proceed with saving address and continuing
//     console.log('Address saved, proceeding to next step...');
//     // Optionally, you can navigate to the next step or perform further actions
//   }
//   onInputBlur(field: string): void {
//     // You can add validation or additional logic here if needed
//     console.log(`${field} input blurred.`);
//   }
//   onInputFocus(fieldName: string): void {
//     console.log(`Input field focused: ${fieldName}`);
//     // You can add more logic here if needed
//   }
//   placeOrder() {
//     // Perform any order placement logic here
//     // Navigate to the payment component after placing the order
//     this.router.navigate(['/payment']);
//   }

// }
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CartService } from '../services/cart.service';
// import { OrderService } from '../services/order.service';
// import { AuthService } from '../services/auth.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Product } from '../models/product.model';
// import { Order, OrderItem, Address } from '../models/order.model';

// @Component({
//   selector: 'app-checkout',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css']
// })
// export class CheckoutComponent implements OnInit {
//   name: string = '';
//   phone: string = '';
//   address: string = '';
//   house: string = '';
//   road: string = '';
//   pincode: string = '';
//   city: string = '';
//   state: string = '';
//   landmark: string = '';
//   items: Product[] = [];
//   totalPrice: number = 0;
//   selectedPaymentMethod: string = '';
//   showPaymentComponent: boolean = false;
//   constructor(
//     private cartService: CartService,
//     private orderService: OrderService,
//     private authService: AuthService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.cartService.getItems().subscribe((items: Product[]) => {
//       this.items = items;
//       this.totalPrice = this.calculateTotalPrice(items);
//     });
//   }

//   private calculateTotalPrice(items: Product[]): number {
//     return items.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
//   }

//   saveAddressAndContinue(): void {
//     // Perform validation if necessary

//     // Proceed with saving address and continuing
//     alert('Address saved, proceeding to next step...');
//     // Optionally, you can navigate to the next step or perform further actions
//   }

//   placeOrder(): void {
//     const user = this.authService.getUser();
//     if (!user) {
//       alert('You need to log in to place an order.');
//       this.router.navigate(['/login']);
//       return;
//     }

//     const orderItems: OrderItem[] = this.items.map(item => ({
//       productId: item.id.toString(), // Convert number to string
//       name: item.name,
//       price: item.price,
//       quantity: item.quantity,
//       size: item.size,
//       image: item.image,
//       description: item.description
//     }));

//     const address: Address = {
//       house: this.house,
//       road: this.road,
//       pincode: this.pincode,
//       city: this.city,
//       state: this.state,
//       landmark: this.landmark
//     };

//     const order: Order = {
//       userId: user.id,
//       items: orderItems,
//       name: this.name,
//       phone: this.phone,
//       address: address,
//       paymentMethod: 'credit-card',  // or whichever method you have selected
//       totalPrice: this.totalPrice,
//       status: 'Processing',
//       createdAt: new Date()
//     };

//     this.orderService.createOrder(order).subscribe({
//       next: () => {
//         this.cartService.clearCart().subscribe(() => {
//           this.router.navigate(['/order-history']);
//         });
//       },
//       error: (err) => {
//         console.error('Error placing order:', err);
//         alert('There was an error placing your order. Please try again.');
//       }
//     });
//   }
 
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { Order, OrderItem, Address } from '../models/order.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  name: string = '';
  phone: string = '';
  house: string = '';
  road: string = '';
  pincode: string = '';
  city: string = '';
  state: string = '';
  landmark: string = '';
  items: Product[] = [];
  totalPrice: number = 0;
  selectedPaymentMethod: string = ''; // No default value, will be set based on user selection
  orderPlaced: boolean = false;
  showPaymentComponent: boolean = false; 
  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getItems().subscribe((items: Product[]) => {
      this.items = items;
      this.totalPrice = this.calculateTotalPrice(items);
    });
  }

  private calculateTotalPrice(items: Product[]): number {
    return items.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  }

  setPaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
    console.log('Selected Payment Method:', this.selectedPaymentMethod);
  }

  saveAddressAndContinue(): void {
    // Perform validation if necessary

    this.showPaymentComponent = true; // Show the payment component
    alert('Address saved, proceeding to next step...');
    // Optionally, you can navigate to the next step or perform further actions
  }

  placeOrder(): void {
    const user = this.authService.getUser();
    if (!user) {
      alert('You need to log in to place an order.');
      this.router.navigate(['/login']);
      return;
    }

    const orderItems: OrderItem[] = this.items.map(item => ({
      productId: item.id.toString(), // Convert number to string
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      size: item.size,
      image: item.image,
      description: item.description
    }));

    const address: Address = {
      house: this.house,
      road: this.road,
      pincode: this.pincode,
      city: this.city,
      state: this.state,
      landmark: this.landmark
    };

    const order: Order = {
      userId: user.id,
      items: orderItems,
      name: this.name,
      phone: this.phone,
      address: address,
      paymentMethod: this.selectedPaymentMethod,  // Set by user selection
      totalPrice: this.totalPrice,
      status: 'Processing',
      createdAt: new Date()
    };

    this.orderService.createOrder(order).subscribe({
      next: () => {
        this.orderPlaced = true;  // Set to true when the order is successfully placed
        this.cartService.clearCart().subscribe(() => {
          this.router.navigate(['/order-history']);
        });
      },
      error: (err) => {
        console.error('Error placing order:', err);
        alert('There was an error placing your order. Please try again.');
      }
    });
  }
}
