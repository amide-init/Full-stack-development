import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  getBrandItems(brandId) {
    return this.http.get('http://localhost:8080/api/item/brand/'+brandId); 
  }
}
