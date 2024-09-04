import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'http://localhost:3000/products';// URL to web api


  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url);
  }
  getFeaturedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsUrl}?featured=true`);
  }
  updateSize(productId: number, size: string): Observable<void> {
    const url = `${this.productsUrl}/${productId}`;
    return this.http.patch<void>(url, { size }).pipe(
      catchError((error) => {
        console.error('Error updating product size:', error);
        throw error; // Throw the error to be caught by the caller
      })
    );
  }
}
