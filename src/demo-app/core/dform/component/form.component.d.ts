import { OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../_entity';
import { DFormControlService } from '../_service';
export declare class DynamicForm implements OnInit {
    private fcs;
    private cdr;
    button: string;
    reset: boolean;
    formDatas: FormBase<any>[];
    formValues: EventEmitter<{}>;
    form: FormGroup;
    constructor(fcs: DFormControlService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    onSubmit(): void;
}
