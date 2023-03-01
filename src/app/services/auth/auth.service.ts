import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, SignUp, Tokens } from '../../interfaces/auth.interface';
import { User } from '../../interfaces/user.interface';
import { environment } from 'src/environments/environment';

interface SignedUp {
  id: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = environment.BASE_URL + '/auth';

  constructor(private http: HttpClient) { }

  setPayloader(payload: any) {
    localStorage.setItem('accessToken', payload.data.token);
    localStorage.setItem('refreshToken', payload.data.refreshToken);
    localStorage.setItem('user', JSON.stringify(payload.data.user));
  }

  logOut() {
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  }

  getUser() {
    return JSON.parse("" + localStorage.getItem('user'));
  }

  login(loginParams: Login): Observable<Tokens> {
    return this.http.post<Tokens>(`${this.BASE_URL}/signin`, loginParams);
  }

  signUp(signUpParams: SignUp) {
    return this.http.post(`${this.BASE_URL}/signup`, signUpParams);
  }

  requestReset(email: any) {
    return this.http.post(`${this.BASE_URL}/request-reset/${email}`, null);
  }

  resetPassword(payload: any) {
    return this.http.post(`${this.BASE_URL}/reset-password`, payload);
  }
}
