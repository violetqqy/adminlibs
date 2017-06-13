"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var DynamicForm = (function () {
    function DynamicForm(fcs, cdr) {
        this.fcs = fcs;
        this.cdr = cdr;
        this.formDatas = [];
        this.formValues = new core_1.EventEmitter();
    }
    DynamicForm.prototype.ngOnInit = function () {
        this.form = this.fcs.toFormGroup(this.formDatas);
        this.cdr.detectChanges();
    };
    DynamicForm.prototype.onSubmit = function () {
        this.formValues.emit(this.form.value);
    };
    return DynamicForm;
}());
__decorate([
    core_1.Input()
], DynamicForm.prototype, "button");
__decorate([
    core_1.Input()
], DynamicForm.prototype, "reset");
__decorate([
    core_1.Input()
], DynamicForm.prototype, "formDatas");
__decorate([
    core_1.Output()
], DynamicForm.prototype, "formValues");
DynamicForm = __decorate([
    core_1.Component({
        selector: 'app-form',
        templateUrl: 'form.component.html',
        styleUrls: ['form.component.scss']
    })
], DynamicForm);
exports.DynamicForm = DynamicForm;
