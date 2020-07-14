import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'home-care-tcc-frontend';

    constructor(private appService: AppService, private http: HttpClient, private router: Router) {
        //this.appService.authenticate(undefined, undefined);
    }

    logout() {
        this.http.post('logout', {}).pipe(finalize(() => {
            this.appService.authenticated = false;
            this.router.navigateByUrl('/login');
        })).subscribe();
    }
}
