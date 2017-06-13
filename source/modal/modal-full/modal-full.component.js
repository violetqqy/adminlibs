"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ModalFullComponent = (function () {
    function ModalFullComponent() {
        this.close = new core_1.EventEmitter();
    }
    ModalFullComponent.prototype.ngOnInit = function () {
    };
    ModalFullComponent.prototype.hide = function () {
        this.close.emit(true);
    };
    return ModalFullComponent;
}());
__decorate([
    core_1.Input()
], ModalFullComponent.prototype, "title");
__decorate([
    core_1.Output()
], ModalFullComponent.prototype, "close");
ModalFullComponent = __decorate([
    core_1.Component({
        selector: 'modal-full',
        templateUrl: 'modal-full.component.html',
        styleUrls: ['modal-full.component.scss']
    })
], ModalFullComponent);
exports.ModalFullComponent = ModalFullComponent;
