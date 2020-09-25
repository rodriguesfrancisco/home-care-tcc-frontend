import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import sexoDescricao from 'src/app/utils/sexoDescricao';
import statusSolicitacao from 'src/app/utils/statusSolicitacao';

@Component({
  selector: 'app-list-atendimentos',
  templateUrl: './list-atendimentos.component.html',
  styleUrls: ['./list-atendimentos.component.scss']
})
export class ListAtendimentosComponent implements OnInit {

  atendimentos: any[];

  constructor(private atendimentoService: AtendimentoService, private router: Router) { }

  ngOnInit(): void {
    this.atendimentoService.listarAtendimentos()
      .subscribe((atendimentos) => {
        this.atendimentos = atendimentos;
      });
  }

  getDescricaoStatusSolicitacao(codigoStatus) {
    return statusSolicitacao[codigoStatus];
  }

  getDescricaoSexo(codigoSexo) {
    return sexoDescricao[codigoSexo];
  }

  routeToChatComponent(idPacienteSolicitacao, solicitacaoId) {
    this.router.navigateByUrl('/profissional/chat', { state: { toId: idPacienteSolicitacao, solicitacaoId } });
  }

}
