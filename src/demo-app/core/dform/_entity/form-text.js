import { FormBase, FormType } from './form-base';
export class FormText extends FormBase {
    constructor(options) {
        super(options);
        this.controlType = FormType.text;
        this.type = options['type'] || 'text';
    }
}
//# sourceMappingURL=form-text.js.map