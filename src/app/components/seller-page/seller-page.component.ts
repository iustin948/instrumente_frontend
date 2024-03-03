import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/Auth.service';
import { ProductService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.css']
})
export class SellerPageComponent implements OnInit {

  constructor(private productService : ProductService, private authService : AuthService) { }

  

  ngOnInit() {
    
    this.fetchProducts();
    
  }
  userProducts : Product[] = [];
  fetchProducts() {
    this.productService.getProductBySellerId(this.authService.getUserId()).subscribe((res : Product[]) =>{
    
      this.userProducts = res
     }
      )
  }

}
