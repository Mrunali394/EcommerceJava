import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  name: string = '';
  address: string = '';
  phone: string = '';

  constructor(private router: Router) {}

  placeOrder() {
    if (this.name && this.address && this.phone) {
      alert('Order placed successfully!');
      this.router.navigate(['/']);
    } else {
      alert('Please fill all fields');
    }
  }
}
