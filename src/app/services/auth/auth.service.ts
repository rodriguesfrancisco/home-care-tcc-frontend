import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import * as moment from 'moment';
import { JWTToken } from 'src/app/models/JWTToken';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<JWTToken>('http://localhost:8080/auth/login', { username: email, password })
            .pipe(
                tap(res => this.setSession(res))
            );
    }

    private setSession(authResult: JWTToken) {
        localStorage.setItem('token', authResult.token);
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
