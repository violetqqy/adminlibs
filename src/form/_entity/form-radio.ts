import { FormBase, FormControl } from './form-base';

export class FormRadio extends FormBase<string> {
  controlType = FormControl.radio;
  options: { 
    id: string, // 值
    name: string, // 显示名称
    checked: boolean // 是否选中
  }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
