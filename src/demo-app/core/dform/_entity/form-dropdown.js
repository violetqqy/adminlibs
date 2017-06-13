import { FormBase, FormType } from './form-base';
export class FormDropdown extends FormBase {
    constructor(options) {
        super(options);
        this.controlType = FormType.dropdown;
        this.options = [];
        this.options = options['options'] || [];
    }
}
//# sourceMappingURL=form-dropdown.js.map