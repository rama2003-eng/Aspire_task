import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserFormComponent],
  template: `<app-user-form></app-user-form>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactiveForm';
}
