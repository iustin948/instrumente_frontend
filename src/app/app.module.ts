import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ProductPageComponent } from './product-page/product-page.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CardComponent } from "./card/card.component";
import { GalleriaModule } from 'primeng/galleria';
import { SearchPageComponent } from './search-page/search-page.component';
import { ScrollerModule } from 'primeng/scroller';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms'; 
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { MegaMenuModule } from 'primeng/megamenu';
import { TabViewModule } from 'primeng/tabview';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';

@NgModule({
    declarations: [				
        AppComponent,
        HomePageComponent,
        HeaderComponent,
        ProductPageComponent,
      SearchPageComponent,
      SellerProfileComponent,
      SellerPageComponent,
      AddProductFormComponent
   ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        CardModule,
        CardComponent,
        GalleriaModule,
        ScrollerModule,
        SliderModule,
        FormsModule,
        InputTextModule,
        PaginatorModule,
        MegaMenuModule,
        TabViewModule,
        DialogModule,
        BrowserAnimationsModule,
        BadgeModule,
        
    ]
})
export class AppModule { }
