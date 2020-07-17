import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    user: User = {
        nomeCompleto: '',
        roles: null
    };

    constructor(private http: HttpClient, private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.me().subscribe(response => {
            this.user = response;
        });
    }

}
