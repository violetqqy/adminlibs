import { FormBase, FormControl } from './form-base';

export class FormEditor extends FormBase <string> {
  controlType = FormControl.editor;
  size: string; // 富文本大小

  constructor(options: {} = {}) {
    super(options);
    this.size = options['size'] || '30';
  }
}
