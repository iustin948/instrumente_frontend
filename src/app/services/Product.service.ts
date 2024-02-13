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
}
