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
import { DialogContentComponent } from './utils/dialog-content/dialog-content-component';
import { ChatComponent } from './components/chat/chat.component';
import { RxStompService, InjectableRxStompConfig, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { rxJsStompConfig } from './config/rx-stomp.config';
import { PropostaFormComponent } from './components/home/profissional-home/proposta-form/proposta-form.component';
import { SolicitacoesDialogComponent } from './components/home/paciente-home/solicitacoes-dialog/solicitacoes-dialog.component';
import { ListSolicitacoesComponent } from './components/home/profissional-home/list-solicitacoes/list-solicitacoes.component';
import { ListPropostasComponent } from './components/home/profissional-home/list-propostas/list-propostas.component';
import { ListMensagensComponent } from './components/list-mensagens/list-mensagens.component';
import { AtendimentoDialogComponent } from './components/home/paciente-home/atendimento-dialog/atendimento-dialog.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'paciente/home', pathMatch: 'full', component: PacienteHomeComponent },
  { path: 'paciente/form-solicitacao', pathMatch: 'full', component: SolicitacaoFormComponent },
  { path: 'paciente/chat', pathMatch: 'full', component: ChatComponent },
  { path: 'profissional/home', pathMatch: 'full', component: ProfissionalHomeComponent },
  { path: 'profissional/chat', pathMatch: 'full', component: ChatComponent },
  { path: 'profissional/proposta', pathMatch: 'full', component: PropostaFormComponent }
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
    SolicitacaoFormComponent,
    DialogContentComponent,
    ChatComponent,
    PropostaFormComponent,
    SolicitacoesDialogComponent,
    ListSolicitacoesComponent,
    ListPropostasComponent,
    ListMensagensComponent,
    AtendimentoDialogComponent
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
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: RxStompService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }