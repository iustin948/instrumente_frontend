import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    // Specify the route you want to navigate to
    this.router.navigate(['/product']); // Replace '/product' with your desired route
  }
}
