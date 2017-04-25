import { FormBase, FormControl } from './form-base';

export class FormTime extends FormBase<string> {
  controlType = FormControl.time;

  constructor(options: {} = {}) {
    super(options);
  }
}
