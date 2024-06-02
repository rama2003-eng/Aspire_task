import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CubePipe } from './cube.pipe'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ProductdetComponent } from './productdet/productdet.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ContactusComponent,AboutusComponent,IonicModule,HomeComponent,HttpClientModule,ProductdetComponent,ReactiveFormsModule,CubePipe,CommonModule ,RouterLink,RouterOutlet,FormsModule,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myAngular';
  joinDate: Date= new Date();
}
