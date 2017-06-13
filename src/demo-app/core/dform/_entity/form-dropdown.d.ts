import { FormBase, FormType } from './form-base';
export declare class FormDropdown extends FormBase<string> {
    controlType: FormType;
    options: {
        id: string;
        name: string;
    }[];
    constructor(options: any);
}
