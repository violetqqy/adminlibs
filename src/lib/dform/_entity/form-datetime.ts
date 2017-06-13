import { FormBase, FormType } from './form-base';

export class FormDatetime extends FormBase<string> {
  controlType = FormType.datetime;

  constructor(options) {
    super(options);
  }
}
