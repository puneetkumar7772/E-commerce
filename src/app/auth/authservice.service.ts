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
return this.http.get(`${this.baseUrl}/products?&limit=25`)
}

getMobiles():Observable<any>{
  return this.http.get(`${this.baseurl2}smartphones`)
}

getLaptops():Observable<any>{
  return this.http.get(`${this.baseurl2}laptops`)
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
getSkincare():Observable<any>{
  return this.http.get(`${this.baseurl2}skincare`)
}
roomFurniture():Observable<any>{
  return this.http.get(`${this.baseurl2}furniture`)
}
womenWatches():Observable<any>{
  return this.http.get(`${this.baseurl2}womens-watches`)
}
menWatches():Observable<any>{
  return this.http.get(`${this.baseurl2}mens-watches`)
}

}
