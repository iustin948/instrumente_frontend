import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private productService :ProductService) { }

  ngOnInit() {
    this.fetchProducts();
  }
  products: Product[] = [];

  fetchProducts() {
    this.productService.getNewProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
    
      for(let i=0 ;i < this.products.length; i++)
          console.log(this.products[i]);
  }
}
