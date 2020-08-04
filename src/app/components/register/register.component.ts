import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatRadioChange } from '@angular/material/radio';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
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

  sexos = [
    { id: 'F', descricao: 'Feminino' },
    { id: 'M', descricao: 'Masculino' },
  ]

  minDate = new Date(1930, 0, 1);
  maxDate = new Date(2009, 11, 31);

  constructor(private formBuider: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {
    this.registerForm = formBuider.group({
      role: ['', Validators.required]
    })
  }

  register() {
    if (this.registerForm.valid) {

      let userRegister: User;
      if (this.registerForm.value.isResponsavel == 'true') {
        const {
          nomeCompleto,
          email,
          password,
          dataNascimento,
          sexo,
          paciente
        } = this.registerForm.value;

        userRegister = {
          nomeCompleto,
          email,
          password,
          dataNascimento,
          sexo,
          roles: ['ROLE_USER_RESPONSAVEL'],
          paciente
        };
      } else {
        const {
          nomeCompleto,
          email,
          password,
          sexo,
          dataNascimento,
          endereco,
          role
        } = this.registerForm.value;

        userRegister = {
          nomeCompleto,
          email,
          password,
          dataNascimento,
          sexo,
          endereco,
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
        sexo: ['', Validators.required],
        dataNascimento: ['', Validators.required],
        endereco: this.formBuider.group({
          cep: ['', Validators.required],
          endereco: ['', Validators.required],
          numero: ['', Validators.required],
          cidade: ['', Validators.required],
          uf: ['', Validators.required],
        })
      });
    } else {
      this.registerForm = this.formBuider.group({
        role: [event.value, Validators.required],
        isResponsavel: ['', Validators.required]
      });
    }
  }

  isResponsavelEventListener(event: MatRadioChange) {
    if (this.isResponsavel(event)) {
      this.registerForm = this.formBuider.group({
        role: [this.registerForm.value['role'], Validators.required],
        isResponsavel: ['true', Validators.required],
        nomeCompleto: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        sexo: ['', Validators.required],
        dataNascimento: ['', Validators.required],
        paciente: this.formBuider.group({
          nomeCompleto: ['', [Validators.required, Validators.minLength(4)]],
          sexo: ['', Validators.required],
          dataNascimento: ['', Validators.required],
          endereco: this.formBuider.group({
            cep: ['', Validators.required],
            endereco: ['', Validators.required],
            numero: ['', Validators.required],
            cidade: ['', Validators.required],
            uf: ['', Validators.required],
          })
        })
      });
    } else {
      this.registerForm = this.formBuider.group({
        role: [this.registerForm.value['role'], Validators.required],
        isResponsavel: ['false', Validators.required],
        nomeCompleto: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        sexo: ['', Validators.required],
        dataNascimento: ['', Validators.required],
        endereco: this.formBuider.group({
          cep: ['', Validators.required],
          endereco: ['', Validators.required],
          numero: ['', Validators.required],
          cidade: ['', Validators.required],
          uf: ['', Validators.required],
        })
      });
    }
  }

  private isResponsavel(event: MatRadioChange) {
    return event.value == 'true';
  }

  ngOnInit(): void {
  }

}
