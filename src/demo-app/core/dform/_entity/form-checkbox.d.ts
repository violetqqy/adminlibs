import { FormBase, FormType } from './form-base';
export declare class FormCheckbox extends FormBase<string> {
    controlType: FormType;
    options: {
        id: string;
        name: string;
        checked: boolean;
    }[];
    constructor(options: any);
}
