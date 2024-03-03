import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SellerPageComponent } from './components/seller-page/seller-page.component';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
  {path:"home", component:HomePageComponent },
  {path:"product", component:ProductPageComponent},
  {path:"search", component:SearchPageComponent},
  {path:"seller", component:SellerPageComponent,canActivate: [authGuard]},
  {path:"profile", component:SellerProfileComponent},
  {path:"add", component:AddProductFormComponent,canActivate: [authGuard]},
  {path:"login", component:LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
