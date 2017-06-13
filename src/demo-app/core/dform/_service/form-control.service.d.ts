import { FormGroup } from '@angular/forms';
import { FormBase } from '../_entity';
export declare class DFormControlService {
    constructor();
    toFormGroup(forms: FormBase<any>[]): FormGroup;
}
