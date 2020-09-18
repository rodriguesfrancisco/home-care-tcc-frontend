import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Solicitacao } from 'src/app/models/Solicitacao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitacoes-dialog',
  templateUrl: './solicitacoes-dialog.component.html',
  styleUrls: ['./solicitacoes-dialog.component.scss']
})
export class SolicitacoesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit(): void {
  }

  routeToChatComponent(profissionalId) {
    this.router.navigateByUrl('/paciente/chat', { state: { toId: profissionalId, solicitacaoId: this.data.solicitacao.id } })
  }

}
