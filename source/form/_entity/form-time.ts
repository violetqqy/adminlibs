import { FormBase, FormType } from './form-base';

export class FormTime extends FormBase<string> {
  controlType = FormType.time;

  constructor(options) {
    super(options);
  }
}
