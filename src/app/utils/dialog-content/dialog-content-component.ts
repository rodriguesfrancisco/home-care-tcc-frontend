import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content-component.html',
})
export class DialogContentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}