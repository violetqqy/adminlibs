"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var component_1 = require("./component");
var _service_1 = require("./_service");
__export(require("./_entity"));
var DFormModule = (function () {
    function DFormModule() {
    }
    return DFormModule;
}());
DFormModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.ReactiveFormsModule,
            material_1.MdButtonModule,
            material_1.MdIconModule,
            material_1.MdInputModule,
            material_1.MdRadioModule,
            material_1.MdCheckboxModule,
            material_1.MdSelectModule
        ],
        declarations: [
            component_1.DynamicForm,
            component_1.DynamicFormSet
        ],
        providers: [
            _service_1.DFormControlService,
            _service_1.UploadService
        ],
        exports: [
            component_1.DynamicForm,
            component_1.DynamicFormSet,
            forms_1.ReactiveFormsModule,
            material_1.MdButtonModule,
            material_1.MdIconModule,
            material_1.MdInputModule,
            material_1.MdRadioModule,
            material_1.MdCheckboxModule,
            material_1.MdSelectModule
        ]
    })
], DFormModule);
exports.DFormModule = DFormModule;
