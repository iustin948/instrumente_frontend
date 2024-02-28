import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http : HttpClient) { }

url = "http://localhost:8080";

login(user: any){
  return this.http.post<any>(this.url + "/login",user)
}

register(user: any){
  return this.http.post<any>(this.url + "/register",user)
}

loggedIn()
{
  return !!localStorage.getItem('token')
}

}
