var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { DialogOptions } from './dialog.entity';
let DialogComponent = class DialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.option = new DialogOptions();
    }
    ngOnInit() {
        this.option = this.dialogRef._containerInstance.dialogConfig.data || new DialogOptions();
    }
};
DialogComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'app-dialog',
        templateUrl: 'dialog.component.html'
    })
], DialogComponent);
export { DialogComponent };
//# sourceMappingURL=dialog.component.js.map