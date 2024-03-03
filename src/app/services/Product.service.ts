import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Form } from '@angular/forms';
import { User } from '../models/user';
import { AuthService } from './Auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http : HttpClient, private authService :AuthService) { }

 url = "http://localhost:8080";

getProducts()
  {
    return this.http.get<Product[]>(this.url);
  }

getProductById(id : number)
{
  return this.http.get<Product>(this.url + "/products/" + id.toString());
}

getProductBySellerId(id : number)
{
  return this.http.get<Product[]>(this.url + "/products/seller/" + id.toString())
}

addProduct(formData : FormData)
{
  console.log(formData.values());
  return this.http.post<Product>(this.url + "/products",  formData);
}

getNewProducts(category? : string)
{
    let URL = this.url + "/products/new";
    if(category)
      URL += "?category=" + category;
    return this.http.get<Product[]>(URL);
}


}
