import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http : HttpClient) { }

url = "http://localhost:8080/";



 getUsers(){
  return this.http.get<User[]>(this.url);
}

addFavorite(productId: number)
{
  return this.http.put<User>(this.url + "addFavorite/" + localStorage.getItem("userId"), productId);
}

deleteFavorite(productId: number)
{
  return this.http.put<User>(this.url + "addFavorite/" + localStorage.getItem("userId"), productId);
}

getFavorite()
{
  return this.http.get<Product[]>(this.url + "favorites/" + localStorage.getItem("userId"));
}

// get user(id)

}
