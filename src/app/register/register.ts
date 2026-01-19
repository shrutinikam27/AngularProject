import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onRegister() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('User registered:', this.user);
    // Add registration logic here
  }
}
