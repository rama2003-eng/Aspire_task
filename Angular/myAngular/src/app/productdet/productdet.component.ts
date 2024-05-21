import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-productdet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productdet.component.html',
  styleUrl: './productdet.component.css'
})
export class ProductdetComponent {
productdata:any

constructor(private service: ProductService ){}

ngOnINit(){
  this.service.getAllProducts().subscribe((data)=>
    {
        console.log(data);
        this.productdata=data
    })
}
}
