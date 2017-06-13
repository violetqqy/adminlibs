import { FormBase, FormType } from './form-base';
export class FormTextarea extends FormBase {
    constructor(options) {
        super(options);
        this.controlType = FormType.textarea;
        this.size = options['size'] || '30';
    }
}
//# sourceMappingURL=form-textarea.js.map