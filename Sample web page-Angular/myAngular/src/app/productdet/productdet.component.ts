import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-productdet',
  standalone: true,
  imports: [IonicModule,CommonModule,FooterComponent],
  templateUrl: './productdet.component.html',
  styleUrl: './productdet.component.css'
})
export class ProductdetComponent {
  carDetails: any;

  constructor(private service: ProductService){}

  ngOnInit(){
    this.service. getCarDetails().subscribe((data)=>{
      this. carDetails = data;
      console.log("fetched");
      
    })
  }

}
