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



@NgModule({
    declarations: [	
        AppComponent,
        HomePageComponent,
        HeaderComponent,
        ProductPageComponent,
      SearchPageComponent
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
        MegaMenuModule
    ]
})
export class AppModule { }
