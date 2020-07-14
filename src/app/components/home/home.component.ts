import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    greeting = { id: null, content: null };

    constructor(private appService: AppService, private http: HttpClient) {
        http.get('http://localhost:8080/token').subscribe(data => {
            const token = data['token'];
            http.get('http://localhost:8080', { headers: new HttpHeaders().set('X-Auth-Token', token) })
                .subscribe(response => {
                    this.greeting.id = response['id'];
                    this.greeting.content = response['content'];
                })
        }, () => { });
    }

    authenticated() {
        return this.appService.authenticated;
    }

    ngOnInit(): void {
    }

}
