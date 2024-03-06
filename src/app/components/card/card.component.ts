import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/Product.service';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from 'src/app/services/Auth.service';
import { UserService } from 'src/app/services/User.service';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent{
  constructor(private router: Router, private productService: ProductService,private authService:AuthService,private userService :UserService) {}

  navigateToProduct() {
    this.router.navigate(['/product']); 
  }
  isHeartRed = false;

  toggleHeart() {
    if(this.authService.loggedIn())
    {
      if(this.isHeartRed === false)
      {
        this.userService.addFavorite(this.product.id).subscribe(res =>
          {
            console.log(res);
            this.isHeartRed = !this.isHeartRed;
          })
      }
      else
      {
        this.userService.deleteFavorite(this.product.id).subscribe(res =>
          {
            console.log(res);
            this.isHeartRed = !this.isHeartRed;
          })
      }
      
    }
    else
    {
      this.router.navigateByUrl("/login");
    }
  }
  ngOnInit()
  {
      let favoriteProducts: Product[] = [];
      this.userService.getFavorite().subscribe(res =>
        {
      
          this.isHeartRed = res.some(product => product.id === this.product.id);
          console.log(this.isHeartRed);
        })
  }
  @Input()
  product!: Product;
  
  

}
