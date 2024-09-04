import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartService.getItems().subscribe(items => {
      this.items = items;
      this.calculateTotalPrice(); // Calculate total price after loading items
    });
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId).subscribe(() => {
      this.loadCartItems(); // Reload cart items after removing
    });
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe(() => {
      this.items = [];
      this.totalPrice = 0; // Reset total price after clearing cart
    });
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  }

  proceedToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

  increaseQuantity(item: Product): void {
    item.quantity = (item.quantity || 0) + 1;
    this.cartService.updateQuantity(item.id, item.quantity).subscribe(() => {
      this.calculateTotalPrice(); // Recalculate total price after updating quantity
    });
  }

  decreaseQuantity(item: Product): void {
    if (item.quantity && item.quantity > 1) {
      item.quantity--;
      this.cartService.updateQuantity(item.id, item.quantity).subscribe(() => {
        this.calculateTotalPrice(); // Recalculate total price after updating quantity
      });
    }
  }

  
}
