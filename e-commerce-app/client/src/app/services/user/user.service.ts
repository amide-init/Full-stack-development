import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  login(data) {
    // let headers = new HttpHeaders({
    //   "Content-Type": "application/json",
    // });
    return this.http.post(
      'http://localhost:8080/api/auth/login',
      data,
      )
  }

  getProfile() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization" : "Bearer " +  localStorage.getItem('token')
    });
    return this.http.get(
      'http://localhost:8080/api/auth',
      {headers: headers}
      ) 
  }
  
}
