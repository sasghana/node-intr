import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  getAccessToken() {
    return JSON.parse(localStorage.getItem('token')).id;
  }

  login(data) {
    console.log('@injectable postData :: ', JSON.stringify(data));
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });

    return this.http.post(`${environment.api_url}/api/authenticate`, data, {headers: headers});
  }

  signup(data) {
    console.log('@injectable postData :: ', JSON.stringify(data));
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });

    return this.http.post(`${environment.api_url}/api/signup`, data, {headers: headers});
  }

  logout() {
    localStorage.clear();
  }

}
