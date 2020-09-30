import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  detalharProfissional(profissionalId: number) {
    return this.http.get(`${environment.api}/user/profissionais/${profissionalId}/detalhes`);
  }

}