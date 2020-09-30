import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhe-profissional',
  templateUrl: './detalhe-profissional.component.html',
  styleUrls: ['./detalhe-profissional.component.scss']
})
export class DetalheProfissionalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
