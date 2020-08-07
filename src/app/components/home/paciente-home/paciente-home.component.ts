import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitacao } from 'src/app/models/Solicitacao';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-paciente-home',
  templateUrl: './paciente-home.component.html',
  styleUrls: ['./paciente-home.component.scss']
})
export class PacienteHomeComponent implements OnInit {

  solicitacao: Solicitacao;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('id');
    this.httpClient.get<Solicitacao>(`${environment.api}/users/${userId}/solicitacoes`)
      .subscribe((solicitacao) => {
        this.solicitacao = solicitacao;
      });
  }

}
