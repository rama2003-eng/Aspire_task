// import { Product } from './product.model';

// export interface Order {
//   id?: number;
//   userId: number;
//   items: Product[];
//   name: string;
//   phone: string;
//   shippingAddress: string;
//   shippingOption: string;
//   paymentMethod: string;
//   totalPrice: number;
//   status: string;
//   createdAt: Date;
// }
export interface Order {
  id?: string; 
  userId: string;
  items: OrderItem[];
  name: string;
  phone: string;
  address: Address;
  paymentMethod: string;
  totalPrice: number;
  status: string;
  createdAt: Date;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
  description: string;
}

export interface Address {
  house: string;
  road: string;
  pincode: string;
  city: string;
  state: string;
  landmark?: string;
}
