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
    const userId = localStorage.getItem('id');
    return this.http.post(`${environment.api}/users/${userId}/solicitacoes`, solicitacao);
  }

  excluirSolicitacao(idSolicitacao: number) {
    const userId = localStorage.getItem('id');
    return this.http.delete(`${environment.api}/users/${userId}/solicitacoes/${idSolicitacao}`);
  }

  editarSolicitacao(solicitacao: Solicitacao) {
    const userId = localStorage.getItem('id');
    return this.http.put(`${environment.api}/users/${userId}/solicitacoes`, solicitacao);
  }
}
