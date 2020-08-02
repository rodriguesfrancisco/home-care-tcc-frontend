import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/User';
import { getFormValidationErrors } from 'src/app/utils/getFormValidationErrors';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(http: HttpClient, private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar) {
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
      }, (error) => {
        this.snackBar.open(error.error, null, { duration: 5000, verticalPosition: 'top' });
      });
    } else {
      this.validationErrors();
    }

  }

  redirectToRegisterPage() {
    this.router.navigateByUrl('/register');
  }

  private validationErrors() {
    console.log(getFormValidationErrors(this.loginForm));
  }

  ngOnInit(): void {
  }

}
