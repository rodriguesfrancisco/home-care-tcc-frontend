import { Component, OnInit, Input } from '@angular/core';
import { Solicitacao } from 'src/app/models/Solicitacao';
import statusSolicitacao from 'src/app/utils/statusSolicitacao';
import sexoDescricao from 'src/app/utils/sexoDescricao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-solicitacoes',
  templateUrl: './list-solicitacoes.component.html',
  styleUrls: ['./list-solicitacoes.component.scss']
})
export class ListSolicitacoesComponent implements OnInit {

  @Input()
  solicitacoes: Solicitacao[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getDescricaoStatusSolicitacao(codigoStatus) {
    return statusSolicitacao[codigoStatus];
  }

  getDescricaoSexo(codigoSexo) {
    return sexoDescricao[codigoSexo];
  }

  routeToChatComponent(idPacienteSolicitacao) {
    this.router.navigateByUrl('/profissional/chat', { state: { toId: idPacienteSolicitacao } });
  }

  routeToPropostaComponent(solicitacao: Solicitacao) {
    this.router.navigateByUrl('/profissional/proposta', { state: { solicitacao } });
  }

}
