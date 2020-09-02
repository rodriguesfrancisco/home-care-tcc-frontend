import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitacao } from 'src/app/models/Solicitacao';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Proposta } from 'src/app/models/Proposta';
import { PropostaService } from 'src/app/services/proposta.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-proposta-form',
  templateUrl: './proposta-form.component.html',
  styleUrls: ['./proposta-form.component.scss']
})
export class PropostaFormComponent implements OnInit {

  formProposta: FormGroup;

  solicitacao: Solicitacao;
  private profissionalId: number;

  constructor(private router: Router, formBuilder: FormBuilder, private propostaService: PropostaService, private snackBar: MatSnackBar) {
    const { solicitacao } = router.getCurrentNavigation().extras.state;
    this.solicitacao = solicitacao;

    this.formProposta = formBuilder.group({
      informacoes: ['', Validators.required],
      preco: [, Validators.required]
    });
  }

  ngOnInit(): void {
    this.profissionalId = Number(localStorage.getItem('id'));
  }

  enviarProposta() {
    const { informacoes, preco } = this.formProposta.value;
    const proposta = {
      informacoes,
      preco,
      idSolicitacao: this.solicitacao.id
    };

    this.propostaService.enviarProposta(proposta, this.profissionalId)
      .subscribe(() => {
        this.router.navigateByUrl('/profissional/home');
      }, (error) => {
        this.snackBar.open(error.error.message, null, { duration: 5000, verticalPosition: 'top' });
      });
  }

}
