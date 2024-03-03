import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/Product.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent{
  constructor(private router: Router, private productService: ProductService) {}

  navigateToProduct() {
    this.router.navigate(['/product']); 
  }

  ngOnInit()
  {

  }
  @Input()
  product!: Product;
  
}
