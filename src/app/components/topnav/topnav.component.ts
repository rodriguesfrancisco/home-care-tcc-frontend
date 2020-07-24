import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

    currentUrl: string;

    excludedLogoutRoutes = ['/login', '/register'];

    constructor(private router: Router, private authService: AuthService) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.currentUrl = event.url;
            }
        })
    }

    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/login');
    }

    checkExcludedLogoutRoutes() {
        return this.excludedLogoutRoutes.find(route => route === this.currentUrl);
    }

    ngOnInit(): void {
    }

}