import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Mensagem } from 'src/app/models/Mensagem';
import { MensagemDTO } from 'src/app/models/MensagemDTO';

@Component({
  selector: 'app-list-mensagens',
  templateUrl: './list-mensagens.component.html',
  styleUrls: ['./list-mensagens.component.scss']
})
export class ListMensagensComponent implements OnInit {

  mensagensAgrupadas: MensagemDTO;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.mensagensAgrupadas = data.mensagens;
    console.log(this.mensagensAgrupadas);
  }

  ngOnInit(): void {
  }

}
