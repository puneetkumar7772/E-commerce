import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }
  baseUrl="https://dummyjson.com"
  baseurl2="https://dummyjson.com/products/category/"

getAllProducts():Observable<any>{
return this.http.get(`${this.baseUrl}/products?&limit=20`)
}

getMenClothes():Observable<any>{
  return this.http.get(`${this.baseurl2}mens-shirts`)

}
getMenShoes():Observable<any>{
  return this.http.get(`${this.baseurl2}mens-shoes`)

}
getWomenClotes():Observable<any>{
  return this.http.get(`${this.baseurl2}womens-dresses`)

}
getWomenShoes():Observable<any>{
  return this.http.get(`${this.baseurl2}womens-shoes`)

}


}
