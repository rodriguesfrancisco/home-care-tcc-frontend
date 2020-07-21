import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/User';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatRadioChange } from '@angular/material/radio';

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
    ];

    isResponsavelRadio = [
        { descricao: 'Sou um responsável', value: true },
        { descricao: 'Sou o próprio paciente', value: false }
    ];

    formUserFields = [
        { name: 'nomeCompleto' },
        { name: 'email' },
        { name: 'password' }
    ];

    constructor(private formBuider: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {
        this.registerForm = formBuider.group({
            role: ['', Validators.required]
        })
    }

    register() {
        if (this.registerForm.valid) {
            let userRegister: User;
            if (this.registerForm.value.isResponsavel == 'true') {
                const { nomeCompleto, email, password, role, nomeCompletoPaciente } = this.registerForm.value;
                userRegister = {
                    nomeCompleto,
                    email,
                    password,
                    roles: ['ROLE_USER_RESPONSAVEL'],
                    paciente: {
                        nomeCompleto: nomeCompletoPaciente,
                        roles: ['ROLE_USER_PACIENTE']
                    }
                };
            } else {
                const { nomeCompleto, email, password, role } = this.registerForm.value;
                userRegister = {
                    nomeCompleto,
                    email,
                    password,
                    roles: [role]
                };
            }

            this.authService.register(userRegister).subscribe((response) => {
                this.snackBar.open('Cadastro realizado com sucesso', null, { duration: 5000, verticalPosition: 'top' });
                this.router.navigateByUrl('/login');
            }, (error) => {
                this.snackBar.open(error.error, null, { duration: 5000, verticalPosition: 'top' });
            });
        }
    }

    tipoUsuarioEventListener(event: MatRadioChange) {
        if (event.value === 'ROLE_USER_PROFISSIONAL') {
            this.registerForm = this.formBuider.group({
                role: [event.value, Validators.required],
                nomeCompleto: ['', [Validators.required, Validators.minLength(4)]],
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(8)]],
            })
        } else {
            this.registerForm = this.formBuider.group({
                role: [event.value, Validators.required],
                isResponsavel: ['', Validators.required]
            })
        }
    }

    isResponsavelEventListener(event: MatRadioChange) {
        if (event.value == 'true') {
            this.registerForm = this.formBuider.group({
                role: [this.registerForm.value['role'], Validators.required],
                isResponsavel: ['true', Validators.required],
                nomeCompleto: ['', [Validators.required, Validators.minLength(4)]],
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(8)]],
                nomeCompletoPaciente: ['', [Validators.required, Validators.minLength(4)]],
            });
        } else {
            this.registerForm = this.formBuider.group({
                role: [this.registerForm.value['role'], Validators.required],
                isResponsavel: ['false', Validators.required],
                nomeCompleto: ['', [Validators.required, Validators.minLength(4)]],
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(8)]],
            });
        }

    }

    ngOnInit(): void {
    }

}
