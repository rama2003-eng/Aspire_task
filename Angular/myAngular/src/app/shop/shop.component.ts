import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Shop } from './shop.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  shop:Shop;
  constructor(){
    this.shop=new Shop("Electronics",100,"Chennai");
  }
}
