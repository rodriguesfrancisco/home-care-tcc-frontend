import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

    @Input()
    parentForm: FormGroup;

    @Input()
    minDate: Date;

    @Input()
    maxDate: Date;

    @Input()
    sexos: {};

    constructor() { }

    ngOnInit(): void {
    }

}
