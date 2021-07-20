import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  createOrder(data) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization" : "Bearer " +  localStorage.getItem('token')
    });
    return this.http.post('http://localhost:8080/api/order/create', data, {headers: headers} )
  }
}
