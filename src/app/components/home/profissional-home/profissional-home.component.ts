import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/User';
import { SolicitacaoService } from 'src/app/services/solicitacao.service';
import { Solicitacao } from 'src/app/models/Solicitacao';

import statusSolicitacao from '../../../utils/statusSolicitacao';
import sexoDescricao from 'src/app/utils/sexoDescricao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissional-home',
  templateUrl: './profissional-home.component.html',
  styleUrls: ['./profissional-home.component.scss']
})
export class ProfissionalHomeComponent implements OnInit {

  profissional: User;
  solicitacoes: Solicitacao[];

  constructor(private authService: AuthService, private solicitacaoService: SolicitacaoService, private router: Router) { }

  ngOnInit(): void {
    this.authService.me()
      .subscribe((profissional) => {
        this.profissional = profissional;
      });

    this.solicitacaoService.listarSolicitacoes()
      .subscribe((solicitacoes) => {
        this.solicitacoes = solicitacoes;
      });
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
