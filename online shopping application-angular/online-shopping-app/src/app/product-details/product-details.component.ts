import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService, // Inject AuthService
    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const productId = +idParam;
      this.productService.getProduct(productId).subscribe((product) => {
        this.product = product;
      });
    } else {
      console.error('Product ID is null');
    }
  }

  addToCart(product: Product): void {
    if (this.authService.isLoggedIn()) {
      this.cartService.addToCart(product).subscribe(
        response => {
          console.log(response); // Log success message
          alert('Product added to cart successfully.');
        },
        error => {
          console.error('Error adding product to cart:', error); // Log error message
          alert('Failed to add product to cart. Please try again later.');
        }
      );
    } else {
      alert('You need to log in to add items to the cart.');
      this.router.navigate(['/login']);
    }
  }
  updateProductSize(size: string): void {
    if (this.product) {
      this.product.size = size; // Update the size in the local product object
      // Assuming productService.updateSize returns an Observable<void>
      this.productService.updateSize(this.product.id, size).subscribe(
        () => {
          console.log('Size updated successfully.');
        },
        error => {
          console.error('Error updating size:', error);
          alert('Failed to update size. Please try again later.');
        }
      );
    }
  }
  getStars(rating: number): boolean[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return [
      ...Array(fullStars).fill(true),
      ...Array(halfStar ? 1 : 0).fill(false),
      ...Array(emptyStars).fill(false)
    ];
  }
}
