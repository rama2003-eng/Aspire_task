import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserFormComponent],
  template: `<app-user-form></app-user-form>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StandaloneComponentsExample';
}
