import { FormBase, FormType } from './form-base';
export declare class FormTextarea extends FormBase<string> {
    controlType: FormType;
    size: string;
    constructor(options: any);
}
