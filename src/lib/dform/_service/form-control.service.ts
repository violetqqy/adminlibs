import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase } from '../_entity';

@Injectable()
export class DFormControlService {
  constructor() {}

  toFormGroup(forms: FormBase<any>[]) {
    let group: any = {};

    forms.forEach(form => {
      group[form.key] = form.required ?
        new FormControl({
          value: form.value == 0 ? form.value : form.value || '',
          disabled: form.disabled
        },
          Validators.compose([
            Validators.required
          ])) :
        new FormControl({
          value: form.value == 0 ? form.value : form.value || '',
          disabled: form.disabled
        });
    });
    return new FormGroup(group);
  }
}
