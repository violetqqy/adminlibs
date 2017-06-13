import { FormBase, FormType } from './form-base';

export class FormDate extends FormBase<string> {
  controlType = FormType.date;

  constructor(options) {
    super(options);
  }
}
