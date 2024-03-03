import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/Auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

categories: MegaMenuItem[];
menuItems!: MenuItem[];
public get isLoggedIn(): boolean {
  return this.authService.loggedIn();
}

  constructor(private el: ElementRef, private authService:AuthService, private router: Router) {
    
    this.categories = [ 
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
      this.categories.push(this.categories[0])
    }
    
    this.menuItems = [
      {
        label: 'Contul meu',
        icon: 'pi pi-cog',
        command: () => {
          router.navigateByUrl("/seller")
        }
      },
      {
        label: 'Products',
        icon: 'pi pi-fw pi-list',
        command: () => {
         
          console.log("products")
        }
      },
      {
        label: 'Iesire din cont',
        icon: ' pi pi-sign-out',
        command: () => {
         
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("userId");
            router.navigateByUrl("/home");
        }
      },
    ]

  }
  ngOnInit() {

   
  }
}
