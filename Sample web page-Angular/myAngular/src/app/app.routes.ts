import { Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ProductdetComponent } from './productdet/productdet.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
    {
        path:"home",
        component: HomeComponent

    },
    {
        path:"aboutus",
        component:AboutusComponent
  
    }
    ,
    {
        path:"productdet",
        component:ProductdetComponent
  
    }
    ,
    {
        path:"blog",
        component:BlogComponent
  
    }
    ,
    {
        path:"contactus",
        component:ContactusComponent
  
    }
    ,
   
    {
        path:"**",
        component:HomeComponent
  
    }
];
