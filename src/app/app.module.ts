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


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        HeaderComponent,
        ProductPageComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        CardModule,
        CardComponent
    ]
})
export class AppModule { }
