import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitacao } from 'src/app/models/Solicitacao';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-home',
  templateUrl: './paciente-home.component.html',
  styleUrls: ['./paciente-home.component.scss']
})
export class PacienteHomeComponent implements OnInit {

  solicitacao: Solicitacao;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('id');
    this.httpClient.get<Solicitacao>(`${environment.api}/users/${userId}/solicitacoes`)
      .subscribe((solicitacao) => {
        this.solicitacao = solicitacao;
      });
  }

  routeToFormSolicitacao() {
    this.router.navigateByUrl('/home/paciente/form-solicitacao');
  }

}
