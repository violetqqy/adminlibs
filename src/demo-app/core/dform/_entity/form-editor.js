import { FormBase, FormType } from './form-base';
export class FormEditor extends FormBase {
    constructor(options) {
        super(options);
        this.controlType = FormType.editor;
        this.size = options['size'] || '30';
    }
}
//# sourceMappingURL=form-editor.js.map