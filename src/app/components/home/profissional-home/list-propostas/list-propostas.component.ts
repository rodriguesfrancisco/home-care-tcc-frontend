import { Component, OnInit } from '@angular/core';
import { PropostaService } from 'src/app/services/proposta.service';
import { Proposta } from 'src/app/models/Proposta';
import sexoDescricao from 'src/app/utils/sexoDescricao';
import statusSolicitacao from 'src/app/utils/statusSolicitacao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-propostas',
  templateUrl: './list-propostas.component.html',
  styleUrls: ['./list-propostas.component.scss']
})
export class ListPropostasComponent implements OnInit {

  propostas: Proposta[];

  constructor(private propostaService: PropostaService, private router: Router) { }

  ngOnInit(): void {
    const profissionalId = Number(localStorage.getItem('id'));
    this.propostaService.listarPropostasProfissional(profissionalId)
      .subscribe((propostas) => {
        this.propostas = propostas;
      });
  }

  routeToEditPropostaForm(proposta: Proposta) {
    this.router.navigateByUrl('/profissional/proposta', { state: { proposta } });
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
