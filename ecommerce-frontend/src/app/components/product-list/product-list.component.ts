import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    { id: 1, name: 'Men’s T-Shirt', price: 499, image: 'assets/images/blue tshirt.jpg', category: 'Clothes' },
    { id: 2, name: 'Women’s Watch', price: 1299, image: 'assets/images/women watch.jpg', category: 'Accessories' },
    { id: 3, name: 'Kids’ Shoes', price: 799, image: 'assets/images/kid shoe.jpg', category: 'Footwear' },
    { id: 4, name: 'Sunglasses', price: 999, image: 'assets/images/sunglass.jpg', category: 'Accessories' },
    { id: 5, name: 'Men’s Jeans', price: 1499, image: 'assets/images/jeans.jpg', category: 'Clothes' },
    { id: 6, name: 'Women’s Handbag', price: 2499, image: 'assets/images/handbag.jpg', category: 'Accessories' },
    { id: 7, name: 'Kids’ Jacket', price: 1999, image: 'assets/images/jacket.jpg', category: 'Clothes' },
    { id: 8, name: 'Men’s Sneakers', price: 2999, image: 'assets/images/snekaers.jpg', category: 'Footwear' },
    { id: 9, name: 'Women’s Sandals', price: 1999, image: 'assets/images/sandal.jpg', category: 'Footwear' },
    { id: 10, name: 'Kids’ Backpack', price: 1299, image: 'assets/images/bag.jpg', category: 'Accessories' },
    { id: 11, name: 'Men’s Formal Shoes', price: 3499, image: 'assets/images/mens shoes.jpg', category: 'Footwear' },
    { id: 12, name: 'Women’s Casual Dress', price: 2999, image: 'assets/images/womens dress.jpg', category: 'Clothes' },
   
    { id: 14, name: 'Men’s Wallet', price: 999, image: 'assets/images/wallet.jpg', category: 'Accessories' },
    { id: 15, name: 'Kids’frok', price: 499, image: 'assets/images/kid frok.jpg', category: 'Clothes' },
    { id: 16, name: 'Men’s Belt', price: 799, image: 'assets/images/belt.jpg', category: 'Accessories' },
    { id: 17, name: 'Women’s Scarf', price: 1299, image: 'assets/images/scraf.jpg', category: 'Clothes' },
    { id: 18, name: 'Kids’ Cap', price: 499, image: 'assets/images/cap.jpg', category: 'Accessories' }, 
    { id: 19, name: 'Men’s Sports Shoes', price: 2999, image: 'assets/images/men sports.jpg', category: 'Footwear' },
    { id: 20, name: 'Women’s Formal Dress', price: 3999, image: 'assets/images/women formal.jpg', category: 'Clothes' },
    { id: 21, name: 'Laptop', price: 50000, image: 'assets/images/laptop.jpg', category: 'Electronics' },
    { id: 22, name: 'Saree', price: 2499, image: 'assets/images/saree.jpg', category: 'Clothes' },
    { id: 23, name: 'Phone', price: 80000, image: 'assets/images/i phone.jpg', category: 'Electronic' },
    { id: 24, name: 'Kids’ Swimwear', price: 1499, image: 'assets/images/swim.jpg', category: 'Clothes' }
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  viewDetail(product: any): void {
    console.log('View details for:', product);
    // You can navigate to product detail page here if needed
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}