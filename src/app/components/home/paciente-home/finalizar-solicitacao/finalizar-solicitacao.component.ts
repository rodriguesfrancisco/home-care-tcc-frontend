import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { SolicitacaoService } from 'src/app/services/solicitacao.service';

@Component({
  selector: 'app-finalizar-solicitacao',
  templateUrl: './finalizar-solicitacao.component.html',
  styleUrls: ['./finalizar-solicitacao.component.scss']
})
export class FinalizarSolicitacaoComponent implements OnInit {

  finalizarSolicitacaoForm: FormGroup;
  atendimento;

  constructor(private router: Router, formBuilder: FormBuilder, private solicitacaoService: SolicitacaoService) {
    const { state } = router.getCurrentNavigation().extras;
    this.atendimento = state.atendimento;
    this.finalizarSolicitacaoForm = formBuilder.group({
      informacoesAtendimento: ['', Validators.required],
      nota: [, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  finalizarSolicitacao() {
    const conclusaoAtendimento = {
      nota: this.finalizarSolicitacaoForm.value.nota,
      informacoesAtendimento: this.finalizarSolicitacaoForm.value.informacoesAtendimento
    };
    this.solicitacaoService.finalizarSolicitacao(this.atendimento.solicitacao, this.atendimento.id, conclusaoAtendimento)
      .subscribe((response) => {
        this.router.navigateByUrl('/paciente/home');
      });
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    this.finalizarSolicitacaoForm.patchValue({ nota: $event.newValue });
  }
}
