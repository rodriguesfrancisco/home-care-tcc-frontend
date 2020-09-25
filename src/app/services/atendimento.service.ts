import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  constructor(private http: HttpClient) { }

  listarAtendimentos() {
    const userId = Number(localStorage.getItem('id'));
    return this.http.get<any[]>(`${environment.api}/users/${userId}/atendimentos`);
  }
}