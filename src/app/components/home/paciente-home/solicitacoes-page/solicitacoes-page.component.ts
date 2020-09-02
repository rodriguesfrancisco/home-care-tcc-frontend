import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Solicitacao } from 'src/app/models/Solicitacao';

@Component({
  selector: 'app-solicitacoes-page',
  templateUrl: './solicitacoes-page.component.html',
  styleUrls: ['./solicitacoes-page.component.scss']
})
export class SolicitacoesPageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
