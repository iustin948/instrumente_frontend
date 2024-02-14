import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http : HttpClient) { }

url = "http://localhost:8080/products";

 getUsers(){
  return this.http.get<User[]>(this.url);
}

// get user(id)

}
