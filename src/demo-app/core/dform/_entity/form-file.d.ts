import { FormBase, FormType } from './form-base';
export declare class FormFile extends FormBase<string> {
    controlType: FormType;
    url: string;
    multiple: boolean;
    constructor(options: any);
}
