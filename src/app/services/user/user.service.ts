import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL: string = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getUserDetails(username: string) {
    return this.http.get(`${this.BASE_URL}/users/${username}`)
  }

}
