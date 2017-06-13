"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var form_1 = require("./form");
var table_1 = require("./table");
var modal_1 = require("./modal");
var AppSharedModule = (function () {
    function AppSharedModule() {
    }
    return AppSharedModule;
}());
AppSharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            form_1.DFormModule,
            table_1.TableModule,
            modal_1.ModalModule
        ],
        exports: [
            common_1.CommonModule,
            form_1.DFormModule,
            table_1.TableModule,
            modal_1.ModalModule
        ]
    })
], AppSharedModule);
exports.AppSharedModule = AppSharedModule;
