import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private BASE_URL: string = environment.BASE_URL ;

  constructor(private http: HttpClient) { }

  getNotifications() {
    return this.http.get(`${this.BASE_URL}/notifications`);
  }

  acceptDeclineRequest(id: string, payload: any) {
    return this.http.put(`${this.BASE_URL}/paddi-list/${id}`, {
      status: payload,
    });
  }

  markAllAsRead() {
    return this.http.post(`${this.BASE_URL}/notifications/read-all`, {});
  }

}
