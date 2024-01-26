import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
items: MegaMenuItem[];
  

  constructor() {
    this.items = [ 
         { 
        label: 'Categorie', 
        items: [ 
          [ 
            { 
              label: 'AngularJS', 
              items: [{ label: 'AngularJS 1' }, { label: 'AngularJS 2' }] 
            }, 
            { 
              label: 'ReactJS', 
              items: [{ label: 'ReactJS 1' }, { label: 'ReactJS 2' }] 
            } 
          ], 
          [ 
            { 
              label: 'HTML', 
              items: [{ label: 'HTML 1' }, { label: 'HTML 2' }] 
            }, 
            { 
              label: 'PrimeNG', 
              items: [{ label: 'PrimeNG 1' }, { label: 'PrimeNG 2' }] 
            } 
          ] 
        ] 
      } 
      
    ]; 
    for (let i = 0; i < 7; i++) {
      this.items.push(this.items[0])
    }
    
   

  }
  ngOnInit() {
  }
}
