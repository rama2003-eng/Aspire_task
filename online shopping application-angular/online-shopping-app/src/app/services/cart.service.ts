import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) {}

  addToCart(product: Product): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }

  getTotalPrice(): Observable<number> {
    return this.getItems().pipe(
      map(items => items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0))
    );
  }

  removeFromCart(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  }

  updateQuantity(productId: number, quantity: number): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${productId}`, { quantity });
  }

  
}
