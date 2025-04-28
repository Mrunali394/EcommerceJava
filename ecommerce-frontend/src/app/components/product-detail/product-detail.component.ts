import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    // Fetch product details using productId
    this.product = {
      id: productId,
      name: 'Men’s T-Shirt',
      price: 499,
      description: 'A comfortable and stylish t-shirt for men.',
      image: 'assets/images/tshirt.jpg'
    };
  }

  addToCart(): void {
    console.log(`${this.product.name} added to cart!`);
    // Add logic to add the product to the cart
  }
}
