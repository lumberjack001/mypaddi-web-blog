import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }
  private BASE_URL = environment.BASE_URL;

  getDoctors() {
    return this.http.get(
      `${this.BASE_URL}/chats/doctors`
    );
  }

  getCounsellors() {
    return this.http.get(
      `${this.BASE_URL}/chats/counsellors`
    );
  }
}
