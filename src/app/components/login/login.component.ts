import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        const token = localStorage.getItem('token');
        if (token) {
            http.get(`${environment.api}/me`).subscribe(response => {
                this.router.navigateByUrl('/home');
            });
        }
    }

    login() {
        const { email, password } = this.loginForm.value;

        if (email && password) {
            this.authService.login(email, password).subscribe(() => {
                this.router.navigateByUrl('/home');
            });
        }
    }

    ngOnInit(): void {
    }

}
