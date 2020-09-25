import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atendimento-dialog',
  templateUrl: './atendimento-dialog.component.html',
  styleUrls: ['./atendimento-dialog.component.scss']
})
export class AtendimentoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit(): void {
  }

  routeToChatComponent(profissionalId, solicitacaoId) {
    console.log(solicitacaoId);
    this.router.navigateByUrl('/paciente/chat', { state: { toId: profissionalId, solicitacaoId } })
  }

}
