import { FormBase, FormType } from './form-base';
export class FormRadio extends FormBase {
    constructor(options) {
        super(options);
        this.controlType = FormType.radio;
        this.options = [];
        this.options = options['options'] || [];
    }
}
//# sourceMappingURL=form-radio.js.map