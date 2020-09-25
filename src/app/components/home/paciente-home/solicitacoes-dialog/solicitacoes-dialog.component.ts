import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Solicitacao } from 'src/app/models/Solicitacao';
import { Router } from '@angular/router';
import { DialogContentComponent } from 'src/app/utils/dialog-content/dialog-content-component';
import { SolicitacaoService } from 'src/app/services/solicitacao.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-solicitacoes-dialog',
  templateUrl: './solicitacoes-dialog.component.html',
  styleUrls: ['./solicitacoes-dialog.component.scss']
})
export class SolicitacoesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private dialog: MatDialog,
    private solicitacaoService: SolicitacaoService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  routeToChatComponent(profissionalId) {
    this.router.navigateByUrl('/paciente/chat', { state: { toId: profissionalId, solicitacaoId: this.data.solicitacao.id } })
  }

  abrirModalConfirmarAceitarProposta(solicitacaoId: number, propostaId: number) {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: {
        mensagem: `Deseja aceitar essa proposta? 
        Após aceitar a proposta você concorda que deseja 
        ser atendido por esse profissional e 
        não poderá mais receber propostas de 
        outros profissionais para essa Solicitação.`
      }
    });

    dialogRef.afterClosed().subscribe((shouldAceitarProposta) => {
      if (shouldAceitarProposta) {
        this.solicitacaoService.aceitarProposta(solicitacaoId, propostaId)
          .subscribe((response) => {
            this.snackBar.open(response['message'], null, { duration: 5000, verticalPosition: 'top' });
          })
      }
    });
  }

}
