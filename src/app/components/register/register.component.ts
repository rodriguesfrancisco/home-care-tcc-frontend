import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/User';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;

    tipoUsuario = [
        { id: 'ROLE_USER_PACIENTE', descricao: 'Paciente' },
        { id: 'ROLE_USER_PROFISSIONAL', descricao: 'Profissional' }
    ]

    constructor(formBuider: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {
        this.registerForm = formBuider.group({
            nomeCompleto: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            role: ['', Validators.required],
        })
    }

    register() {
        if (this.registerForm.valid) {
            const { nomeCompleto, email, password, role } = this.registerForm.value;
            const userRegister: User = {
                nomeCompleto,
                email,
                password,
                roles: [role]
            };

            this.authService.register(userRegister).subscribe((response) => {
                this.snackBar.open('Cadastro realizado com sucesso', null, { duration: 5000, verticalPosition: 'top' });
                this.router.navigateByUrl('/login');
            }, (error) => {
                this.snackBar.open(error.error, null, { duration: 5000, verticalPosition: 'top' });
            });
        }
    }

    ngOnInit(): void {
    }

}
