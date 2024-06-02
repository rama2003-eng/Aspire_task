import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [ FooterComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

}
