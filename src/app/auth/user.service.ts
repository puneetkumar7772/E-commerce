import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000/ecommerce/';

  userRegister(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}register`, body);
  }

  userLogin(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}login`, body);
  }

  sellerRegister(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}sellerRegister`, body);
  }

  sellerLogin(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}sellerlogin`, body);
  }
}
