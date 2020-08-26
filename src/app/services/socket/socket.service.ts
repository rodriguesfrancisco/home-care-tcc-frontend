import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mensagem } from 'src/app/models/Mensagem';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private http: HttpClient) { }

  post(data: Mensagem) {
    return this.http.post<Mensagem>(`${environment.api}/api/socket`, data);
  }

  getMensagens(fromId1: number, fromId2: number) {
    return this.http.get<Mensagem[]>(`${environment.api}/mensagens/${fromId1}/${fromId2}`);
  }
}
