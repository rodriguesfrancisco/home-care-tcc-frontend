import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitacao } from '../models/Solicitacao';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  constructor(private http: HttpClient) { }

  cadastrarSolicitacao(solicitacao: Solicitacao) {
    console.log(solicitacao);
    const userId = localStorage.getItem('id');
    this.http.post(`${environment.api}/users/${userId}/solicitacoes`, solicitacao).subscribe((res) => { });
  }
}
