import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CardComponent } from "./components/card/card.component";
import { GalleriaModule } from 'primeng/galleria';
import { SearchPageComponent } from './components/search-page/search-page.component';
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
import { SellerPageComponent } from './components/seller-page/seller-page.component';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { RouterModule } from '@angular/router';
import { ProductService } from './services/Product.service';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { authGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
    declarations: [				
        AppComponent,
        HomePageComponent,
        HeaderComponent,
        ProductPageComponent,
      SearchPageComponent,
      SellerProfileComponent,
      SellerPageComponent,
      AddProductFormComponent,
      LoginPageComponent
   ],
    providers: [ProductService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        RouterModule,
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
        ScrollPanelModule,
        ReactiveFormsModule,
        FileUploadModule,
        
    ]
})
export class AppModule { }
