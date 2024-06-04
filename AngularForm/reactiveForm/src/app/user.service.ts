import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  submitForm(formData: any) {
    // Handle the form submission logic here
    console.log('User data submitted:', formData);
    alert('Form submitted successfully!');
  }
}
