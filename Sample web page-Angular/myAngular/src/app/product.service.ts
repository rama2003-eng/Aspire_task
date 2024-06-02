import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private client:HttpClient) {  }
  getCarDetails() {
    return this.client.get("http://localhost:3000/cardetails");
  }
}
