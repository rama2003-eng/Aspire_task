// product.model.ts

export interface Review {
  rating: number;
  comment: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  size: string;
  quantity: number;
  reviews: Review[]; // Array of reviews
}
