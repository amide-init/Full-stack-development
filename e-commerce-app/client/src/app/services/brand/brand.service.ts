import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http:HttpClient) { }

  getBrands() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization" : "Bearer " +  localStorage.getItem('token')
    });
    return this.http.get('http://localhost:8080/api/brand', {headers: headers}); 
  }
}
