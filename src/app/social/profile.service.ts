import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Profile} from "./profile.model";

@Injectable()
export class ProfileService {

  result: any;

  constructor(private http: HttpClient) { }

  getPeoples() {
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
    return this.http.get(`${environment.api_url}/api/peoples`, {headers: headers});
  }

  getPeople(user: Profile) {
    console.log('@injectable postData :: ', JSON.stringify(user));
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
    return this.http.get(`${environment.api_url}/api/people/`+user.id, {headers: headers});
  }


}
