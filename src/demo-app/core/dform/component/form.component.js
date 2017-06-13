var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
let DynamicForm = class DynamicForm {
    constructor(fcs, cdr) {
        this.fcs = fcs;
        this.cdr = cdr;
        this.formDatas = [];
        this.formValues = new EventEmitter();
    }
    ngOnInit() {
        this.form = this.fcs.toFormGroup(this.formDatas);
        this.cdr.detectChanges();
    }
    onSubmit() {
        this.formValues.emit(this.form.value);
    }
};
__decorate([
    Input()
], DynamicForm.prototype, "button", void 0);
__decorate([
    Input()
], DynamicForm.prototype, "reset", void 0);
__decorate([
    Input()
], DynamicForm.prototype, "formDatas", void 0);
__decorate([
    Output()
], DynamicForm.prototype, "formValues", void 0);
DynamicForm = __decorate([
    Component({
        moduleId: module.id,
        selector: 'app-form',
        templateUrl: 'form.component.html',
        styleUrls: ['form.component.scss']
    })
], DynamicForm);
export { DynamicForm };
//# sourceMappingURL=form.component.js.map