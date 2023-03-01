import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SubscriptionPayload } from 'src/app/interfaces/subscription.interface';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getSubscriptions() {
    return this.http.get(`${this.BASE_URL}/subscriptions/gold-star`);
  }

  verifySubscription(type: any, payload: any) {
    return this.http.post(
      `${this.BASE_URL}/subscriptions/purchase?type=${type}`,
      payload
    );
  }

}
