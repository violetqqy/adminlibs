import { FormBase, FormType } from './form-base';
export class FormCheckbox extends FormBase {
    constructor(options) {
        super(options);
        this.controlType = FormType.checkbox;
        this.options = [];
        this.options = options['options'] || [];
    }
}
//# sourceMappingURL=form-checkbox.js.map