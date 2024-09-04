// import { Component } from '@angular/core';
// import { ProductService } from '../services/product.service';
// import { Product } from '../models/product.model';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { CartService } from '../services/cart.service';

// @Component({
//   selector: 'app-product-list',
//   standalone: true,
//   imports: [FormsModule, CommonModule, RouterModule, HttpClientModule],
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent {
//   products: Product[] = [];
//   categoryFilter: any;
//   filteredProducts: Product[] = [];

//   constructor(private productService: ProductService, private cartService: CartService) {}

//   ngOnInit(): void {
//     this.productService.getProducts().subscribe((products) => {
//       this.products = products;
//       this.filteredProducts = products;
//     });
//   }

//   filterProducts(): void {
//     if (this.categoryFilter) {
//       this.filteredProducts = this.products.filter(product => 
//         product.category.toLowerCase().includes(this.categoryFilter.toLowerCase()));
//     } else {
//       this.filteredProducts = this.products;
//     }
//   }

//   addToCart(product: Product): void {
//     this.cartService.addToCart(product);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  uniqueCategories: string[] = [];
  selectedCategories: string[] = [];
  selectedPriceRanges: string[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
      this.uniqueCategories = [...new Set(products.map(product => product.category))];
    });
  }

  onCategoryChange(event: any): void {
    const category = event.target.value;
    if (event.target.checked) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories = this.selectedCategories.filter(c => c !== category);
    }
    this.filterProducts();
  }

  onPriceRangeChange(event: any): void {
    const range = event.target.value;
    if (event.target.checked) {
      this.selectedPriceRanges.push(range);
    } else {
      this.selectedPriceRanges = this.selectedPriceRanges.filter(r => r !== range);
    }
    this.filterProducts();
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      const matchesCategory = this.selectedCategories.length ? this.selectedCategories.includes(product.category) : true;
      const matchesPrice = this.selectedPriceRanges.length ? this.isProductInSelectedPriceRange(product.price) : true;
      return matchesCategory && matchesPrice;
    });
  }

  isProductInSelectedPriceRange(price: number): boolean {
    for (const range of this.selectedPriceRanges) {
      if (range === '100-300' && price >= 100 && price <= 300) return true;
      if (range === '300-600' && price > 300 && price <= 600) return true;
      if (range === '600-1000' && price > 600 && price <= 1000) return true;
      if (range === 'above-1000' && price > 1000) return true;
    }
    return false;
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}

