import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitacao } from '../models/Solicitacao';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  constructor(private http: HttpClient) { }

  listarSolicitacoes() {
    return this.http.get<Solicitacao[]>(`${environment.api}/solicitacoes`);
  }

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

  aceitarProposta(solicitacaoId: number, propostaId: number) {
    const userId = localStorage.getItem('id');
    return this.http.put(`${environment.api}/users/${userId}/solicitacoes/${solicitacaoId}/propostas/${propostaId}/aceitar`, {});
  }

  finalizarSolicitacao(solicitacaoId: number, atendimentoId: number, conclusaoAtendimento: any) {
    const userId = localStorage.getItem('id');
    return this.http.put(`${environment.api}/users/${userId}/solicitacoes/${solicitacaoId}/atendimentos/${atendimentoId}/finalizar`, conclusaoAtendimento);
  }
}
