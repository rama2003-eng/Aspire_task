import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../blog.service';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ CommonModule, FooterComponent ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogDetails: any;

  constructor(private service: BlogService){}

  ngOnInit(){
    this.service. getBlogDetails().subscribe((data)=>{
      this. blogDetails = data;
      console.log("fetched");
      
    })
  }
}
