import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, skip } from 'rxjs/operators';

import * as moment from 'moment';
import { JWTToken } from 'src/app/models/JWTToken';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<JWTToken>(`${environment.api}/auth/login`, { email, password })
      .pipe(
        tap(res => this.setSession(res))
      );
  }

  register(userRegister: User) {
    return this.http.post(`${environment.api}/auth/register`, userRegister, { headers: { skip: "true" } });
  }

  me() {
    return this.http.get<User>(`${environment.api}/auth/me`);
  }

  private setSession(authResult: JWTToken) {
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('id', String(authResult.id));
    localStorage.setItem('expires_at', new Date(authResult.expireDate).getTime().toString());
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }
}
