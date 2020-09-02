import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proposta } from '../models/Proposta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  constructor(private http: HttpClient) { }

  enviarProposta(proposta, userId: number) {
    return this.http.post(`${environment.api}/users/${userId}/propostas`, proposta);
  }
}
