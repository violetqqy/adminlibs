import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { 
  MdButtonModule, MdIconModule, 
  MdInputModule, MdRadioModule, 
  MdCheckboxModule, MdSelectModule
} from '@angular/material';

import { DynamicForm, DynamicFormSet } from './component';
import { DFormControlService, UploadService } from './_service';

export * from './_entity';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdButtonModule, 
    MdIconModule, 
    MdInputModule,
    MdRadioModule, 
    MdCheckboxModule,
    MdSelectModule
  ],
  declarations: [
    DynamicForm,
    DynamicFormSet
  ],
  providers: [
    DFormControlService,
    UploadService
  ],
  exports: [
    DynamicForm,
    DynamicFormSet,
    ReactiveFormsModule,
    MdButtonModule, 
    MdIconModule, 
    MdInputModule,
    MdRadioModule, 
    MdCheckboxModule,
    MdSelectModule
  ]
})
export class DFormModule {
}
