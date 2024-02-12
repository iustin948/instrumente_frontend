import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';


const routes: Routes = [
  {path:"home", component:HomePageComponent},
  {path:"product", component:ProductPageComponent},
  {path:"search", component:SearchPageComponent},
  {path:"seller", component:SellerPageComponent},
  {path:"profile", component:SellerProfileComponent},
  {path:"add", component:AddProductFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
