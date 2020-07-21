import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-responsavel-form',
    templateUrl: './responsavel-form.component.html',
    styleUrls: ['./responsavel-form.component.scss']
})
export class ResponsavelFormComponent implements OnInit {

    @Input()
    parentForm: FormGroup;

    constructor() { }

    ngOnInit(): void {
    }

}
