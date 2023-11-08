import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://e-commerce-backend-hblz.onrender.com/ecommerce/'
  baseurl2='http://localhost:3000/ecommerce'

  userRegister(body: any): Observable <any> {
    return this.http.post(`${this.baseUrl}register`, body);
  }

  userLogin(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}login`, body);
  }

  getAllUSers(): Observable<any> {
    return this.http.get(`${this.baseUrl}allUSer`,);
  }

  deleteUSer(id:any): Observable<any> {
    return this.http.delete(`${this.baseUrl}deleteUSer/${id}`,);
  }

  sellerRegister(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}sellerRegister`, body);
  }

  sellerLogin(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}sellerlogin`, body);
  }

  adminLogin(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/login`, body);
  }
  getAllSelers(): Observable<any> {
    return this.http.get(`${this.baseUrl}allSeller`,);
  }

  deleteSeller(id:any): Observable<any> {
    return this.http.delete(`${this.baseUrl}deleteSeller/${id}`,);
  }

}
