import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitacao } from 'src/app/models/Solicitacao';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from 'src/app/utils/dialog-content/dialog-content-component';
import { SolicitacaoService } from 'src/app/services/solicitacao.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import statusSolicitacao from 'src/app/utils/statusSolicitacao';
import sexoDescricao from 'src/app/utils/sexoDescricao';

@Component({
  selector: 'app-paciente-home',
  templateUrl: './paciente-home.component.html',
  styleUrls: ['./paciente-home.component.scss']
})
export class PacienteHomeComponent implements OnInit {

  solicitacao: Solicitacao;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private dialog: MatDialog,
    private solicitacaoService: SolicitacaoService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.carregarSolicitacao();
  }

  routeToFormSolicitacao() {
    this.router.navigateByUrl('/paciente/form-solicitacao');
  }

  private carregarSolicitacao() {
    const userId = localStorage.getItem('id');
    this.httpClient.get<Solicitacao>(`${environment.api}/users/${userId}/solicitacoes`)
      .subscribe((solicitacao) => {
        this.solicitacao = solicitacao;
      });
  }

  abrirModalConfirmarExclusao(idSolicitacao: number) {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe((shouldDeleteSolicitacao) => {
      if (shouldDeleteSolicitacao) {
        this.solicitacaoService.excluirSolicitacao(idSolicitacao).subscribe((response) => {
          if (response['status'] === 200) {
            this.snackBar.open(response['message'], null, { duration: 5000, verticalPosition: 'top' });
            this.carregarSolicitacao();
          }
        });
      }
    });
  }

  routeToEditSolicitacao(solicitacao: Solicitacao) {
    this.router.navigateByUrl('/paciente/form-solicitacao', { state: { data: solicitacao } });
  }

  routeToChatComponent(profissionalId) {
    this.router.navigateByUrl('/paciente/chat', { state: { toId: profissionalId } })
  }

  getDescricaoStatusSolicitacao(codigoStatus) {
    return statusSolicitacao[codigoStatus];
  }

  getDescricaoSexo(codigoSexo) {
    return sexoDescricao[codigoSexo];
  }

}
