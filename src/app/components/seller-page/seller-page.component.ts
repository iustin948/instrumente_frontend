import { Component, OnInit } from '@angular/core';
import { TabViewChangeEvent } from 'primeng/tabview';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/Auth.service';
import { ProductService } from 'src/app/services/Product.service';
import { UserService } from 'src/app/services/User.service';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.css']
})
export class SellerPageComponent implements OnInit {

  constructor(private productService : ProductService, private authService : AuthService, private userService :UserService) { }

  

  ngOnInit() {
    
    this.fetchProducts();
    this.fetchFavoriteProducts();
    
  }
  userProducts : Product[] = [];
  favoriteProducts : Product[] = [];
  fetchProducts() {
    this.productService.getProductBySellerId(this.authService.getUserId()).subscribe((res : Product[]) =>{
    
      this.userProducts = res
     }
      )
  }

  
  fetchFavoriteProducts()
  {
    console.log("hello")
    this.userService.getFavorite().subscribe(res =>
      {
        this.favoriteProducts = res;
      })
  }



}
