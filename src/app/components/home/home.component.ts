import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    user = { username: null, roles: null };

    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {
        this.http.get('http://localhost:8080/me').subscribe(data => {
            this.user.username = data['username'];
            this.user.roles = data['roles'];
        });
    }

}
