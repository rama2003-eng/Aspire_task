import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { OrderService } from '../services/order.service';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService, private authService: AuthService, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const user = this.authService.getUser();
      if (user) {
        this.orderService.getOrders().subscribe(orders => {
          console.log('All Orders:', orders);
          this.orders = orders.filter(order => order.userId === user.id);
          console.log('User Orders:', this.orders);
        });
      }
    }
  }
}
