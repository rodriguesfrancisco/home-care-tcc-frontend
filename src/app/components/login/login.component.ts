import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/User';
import { getFormValidationErrors } from 'src/app/utils/getFormValidationErrors';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(http: HttpClient, private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });

        const token = localStorage.getItem('token');
        if (token) {
            http.get<User>(`${environment.api}/auth/me`).subscribe(() => {
                router.navigateByUrl('/home');
            });
        }
    }

    login() {
        if (this.loginForm.valid) {
            const { email, password } = this.loginForm.value;

            this.authService.login(email, password).subscribe(() => {
                this.router.navigateByUrl('/home');
            });
        } else {
            this.validationErrors();
        }

    }

    private validationErrors() {
        console.log(getFormValidationErrors(this.loginForm));
    }

    ngOnInit(): void {
    }

}
