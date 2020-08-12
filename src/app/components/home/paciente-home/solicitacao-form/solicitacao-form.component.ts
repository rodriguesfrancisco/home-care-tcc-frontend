import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SolicitacaoService } from 'src/app/services/solicitacao.service';
import { Solicitacao } from 'src/app/models/Solicitacao';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-solicitacao-form',
  templateUrl: './solicitacao-form.component.html',
  styleUrls: ['./solicitacao-form.component.scss']
})
export class SolicitacaoFormComponent implements OnInit {

  solicitacaoForm: FormGroup;

  constructor(formBuilder: FormBuilder, private solicitacaoService: SolicitacaoService, private router: Router, private snackBar: MatSnackBar) {
    this.solicitacaoForm = formBuilder.group({
      titulo: ['', Validators.required],
      informacoes: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  cadastrarSolicitacao() {
    if (this.solicitacaoForm.valid) {
      const { titulo, informacoes } = this.solicitacaoForm.value;
      const solicitacao: Solicitacao = {
        titulo,
        informacoes,
        dataSolicitacao: new Date(),
        statusSolicitacao: 'EM_ABERTO'
      };

      this.solicitacaoService.cadastrarSolicitacao(solicitacao)
        .subscribe((response) => {
          if (response['status'] === 201) {
            this.snackBar.open(response['message'], null, { duration: 5000, verticalPosition: 'top' });
            this.router.navigateByUrl('/home/paciente');
          }
        });
    }
  }

}
