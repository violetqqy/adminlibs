import { FormBase, FormControl } from './form-base';

export class FormDate extends FormBase<string> {
  controlType = FormControl.date;

  constructor(options: {} = {}) {
    super(options);
  }
}
