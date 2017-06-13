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
var material_1 = require("@angular/material");
var table_component_1 = require("./table.component");
__export(require("./table.entity"));
var TableModule = (function () {
    function TableModule() {
    }
    return TableModule;
}());
TableModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            material_1.MdButtonModule,
            material_1.MdIconModule
        ],
        declarations: [
            table_component_1.TableComponent
        ],
        exports: [
            table_component_1.TableComponent,
            material_1.MdButtonModule,
            material_1.MdIconModule
        ]
    })
], TableModule);
exports.TableModule = TableModule;
