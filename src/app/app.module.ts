import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { AuthInterceptor } from './interceptors/AuthInterceptor';
import { RegisterComponent } from './components/register/register.component';
import { ResponsavelFormComponent } from './components/register/responsavel-form/responsavel-form.component';
import { UserFormComponent } from './components/register/user-form/user-form.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { PacienteHomeComponent } from './components/home/paciente-home/paciente-home.component';
import { ProfissionalHomeComponent } from './components/home/profissional-home/profissional-home.component';
import { SolicitacaoFormComponent } from './components/home/paciente-home/solicitacao-form/solicitacao-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home/paciente', pathMatch: 'full', component: PacienteHomeComponent },
  { path: 'home/profissional', pathMatch: 'full', component: ProfissionalHomeComponent },
  { path: 'home/paciente/form-solicitacao', pathMatch: 'full', component: SolicitacaoFormComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResponsavelFormComponent,
    UserFormComponent,
    TopnavComponent,
    PacienteHomeComponent,
    ProfissionalHomeComponent,
    SolicitacaoFormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
  ],
  providers: [
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }