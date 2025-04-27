import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister() {
    console.log('User Registered:', this.name, this.email, this.password);

    // You can save this data or send it to a server here

    // After registration, redirect to Login page
    alert('Registration Successful!');
    this.router.navigate(['/login']);
  }
}