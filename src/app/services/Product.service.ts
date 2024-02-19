import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http : HttpClient) { }

 url = "http://localhost:8080/products";

getProducts()
  {
    return this.http.get<Product[]>(this.url);
  }

getProductById(id : number)
{
  return this.http.get<Product>(this.url + "/" + id.toString());
}

getNewProducts(category? : string)
{
    let URL = this.url + "/new";
    if(category)
      URL += "?category=" + category;
    return this.http.get<Product[]>(URL);
}


}
