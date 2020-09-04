import { Component, OnInit } from '@angular/core';
import { PropostaService } from 'src/app/services/proposta.service';
import { Proposta } from 'src/app/models/Proposta';

@Component({
  selector: 'app-list-propostas',
  templateUrl: './list-propostas.component.html',
  styleUrls: ['./list-propostas.component.scss']
})
export class ListPropostasComponent implements OnInit {

  propostas: Proposta[];

  constructor(private propostaService: PropostaService) { }

  ngOnInit(): void {
    const profissionalId = Number(localStorage.getItem('id'));
    this.propostaService.listarPropostasProfissional(profissionalId)
      .subscribe((propostas) => {
        this.propostas = propostas;
      });
  }

}
