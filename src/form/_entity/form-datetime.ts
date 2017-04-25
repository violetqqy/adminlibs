import { FormBase, FormControl } from './form-base';

export class FormDatetime extends FormBase<string> {
  controlType = FormControl.datetime;

  constructor(options: {} = {}) {
    super(options);
  }
}
