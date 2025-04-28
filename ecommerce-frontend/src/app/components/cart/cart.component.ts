import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // 🚀 Added Router import
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router) {} // 🚀 Inject Router

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCartItems(); // Refresh the cart
  }

  // 🚀 New Buy Now Method
  buyNow() {
    if (this.cartItems.length > 0) {
      this.router.navigate(['/checkout']); // Navigate to checkout page
    } else {
      window.alert('Your cart is empty!');
    }
  }
}