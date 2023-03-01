import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private BASE_URL: string = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getPosts(username: string) {
    return this.http.get(`${this.BASE_URL}/users/${username}/posts`);
  }

  getPolls(username: string) {
    return this.http.get(`${this.BASE_URL}/users/${username}/polls`);
  }
  
  getProfileDetails(username: string) {
    return this.http.get(`${this.BASE_URL}/profiles/${username}`);
  }

  updateProfile(payload: any) {
    return this.http.put(`${this.BASE_URL}/profiles`, payload);
  }

  updateAccount(payload: any) {
    return this.http.put(`${this.BASE_URL}/users`, payload);
  }
}
