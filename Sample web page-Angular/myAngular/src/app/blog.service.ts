import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private client:HttpClient) {  }
  getBlogDetails() {
    return this.client.get("http://localhost:4000/blogdetails");
  }
}
