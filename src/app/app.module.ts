import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { AuthInterceptor } from './interceptors/AuthInterceptor';
import { RegisterComponent } from './components/register/register.component';
import { ResponsavelFormComponent } from './components/responsavel-form/responsavel-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { MatNativeDateModule, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { TextMaskModule } from 'angular2-text-mask';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ResponsavelFormComponent,
        UserFormComponent,
        TopnavComponent
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