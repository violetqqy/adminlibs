import { FormBase, FormType } from './form-base';

export class FormTextarea extends FormBase<string> {
  controlType = FormType.textarea;
  size: string; // 多行文本框行数（决定高度）

  constructor(options) {
    super(options);
    this.size = options['size'] || '30';
  }
}
