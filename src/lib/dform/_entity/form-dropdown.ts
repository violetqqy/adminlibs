import { FormBase, FormType } from './form-base';

export class FormDropdown extends FormBase<string> {
  controlType = FormType.dropdown;
  options: { 
    id: string, // 值
    name: string // 显示名称
  }[] = [];

  constructor(options) {
    super(options);
    this.options = options['options'] || [];
  }
}
