import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  constructor(private router: Router) {} // Inject Router

  navigateToProduct() {
    this.router.navigate(['/product']); 
  }
  @Input()
  product!: Product;
  
}
