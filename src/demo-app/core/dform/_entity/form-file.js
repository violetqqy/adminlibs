import { FormBase, FormType } from './form-base';
export class FormFile extends FormBase {
    constructor(options) {
        super(options);
        this.controlType = FormType.file;
        this.multiple = options['multiple'] || false;
        this.url = options['url'] || '';
    }
}
//# sourceMappingURL=form-file.js.map