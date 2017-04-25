import { FormBase, FormControl } from './form-base';

export class FormText extends FormBase<string> {
  controlType = FormControl.text;
  type: string; // 文本框类型（超级不推荐使用date等浏览器支持有限的type类型，慎用！！！）

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'text';
  }
}
