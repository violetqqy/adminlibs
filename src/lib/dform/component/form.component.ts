import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBase } from '../_entity';

import { DFormControlService } from '../_service';

@Component({
  moduleId: module.id,
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class DynamicForm implements OnInit {

  @Input() button: string;
  @Input() reset: boolean;

  @Input() formDatas: FormBase<any>[] = [];
  @Output() formValues = new EventEmitter();

  form: FormGroup;

  constructor(
    private fcs: DFormControlService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.formDatas);
    this.cdr.detectChanges();
  }

  onSubmit() {
    this.formValues.emit(this.form.value);
  }

}
