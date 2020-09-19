import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Mensagem } from 'src/app/models/Mensagem';
import { MensagemDTO } from 'src/app/models/MensagemDTO';

@Component({
  selector: 'app-list-mensagens',
  templateUrl: './list-mensagens.component.html',
  styleUrls: ['./list-mensagens.component.scss']
})
export class ListMensagensComponent implements OnInit {

  mensagensAgrupadas: MensagemDTO;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router) {
    this.mensagensAgrupadas = data.mensagens;
  }

  ngOnInit(): void {
  }

  routeToChatComponent(idProfissional, solicitacaoId) {
    this.router.navigateByUrl('/paciente/chat', { state: { toId: idProfissional, solicitacaoId } });
  }

}
