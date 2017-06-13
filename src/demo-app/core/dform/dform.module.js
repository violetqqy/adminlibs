var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdIconModule, MdInputModule, MdRadioModule, MdCheckboxModule, MdSelectModule } from '@angular/material';
import { DynamicForm, DynamicFormSet } from './component';
import { DFormControlService, UploadService } from './_service';
export * from './_entity';
let DFormModule = class DFormModule {
};
DFormModule = __decorate([
    NgModule({
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
            CommonModule,
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
], DFormModule);
export { DFormModule };
//# sourceMappingURL=dform.module.js.map