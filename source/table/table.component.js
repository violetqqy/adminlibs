"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var table_entity_1 = require("./table.entity");
var TableComponent = (function () {
    function TableComponent() {
        this.handleEmmit = new core_1.EventEmitter();
        this.pageEmitter = new core_1.EventEmitter();
        this.pageList = [];
        this.controlType = table_entity_1.ControlType;
    }
    TableComponent.prototype.ngOnInit = function () {
        if (this.table.ifPage) {
            this.getPageList(this.table.totalPage, this.table.currentPage);
        }
    };
    TableComponent.prototype.gotoHandle = function (key, value) {
        this.handleEmmit.emit({ key: key, value: value });
    };
    TableComponent.prototype.getPageList = function (total, current) {
        this.pageList = [];
        if (total <= 6) {
            for (var i = 0; i < total; i++) {
                this.pageList.push(i + 1);
            }
        }
        else if (total > 6) {
            if (current + 1 === 1) {
                this.pageList.push(1, current + 2, '...', total);
            }
            else if (current + 1 === 2) {
                this.pageList.push(1, current + 1, current + 2, '...', total);
            }
            else if (current + 1 === total - 1) {
                this.pageList.push(1, '...', current, current + 1, total);
            }
            else if (current + 1 === total) {
                this.pageList.push(1, '...', current, total);
            }
            else {
                this.pageList.push(1, '...', current, current + 1, current + 2, '...', total);
            }
        }
    };
    // 获取指定页
    TableComponent.prototype.getCurrentPage = function (page) {
        if (page !== '...') {
            this.pageEmitter.emit(page - 1);
            this.getPageList(this.table.totalPage, page - 1);
        }
    };
    // 获取前一页
    TableComponent.prototype.getPrePage = function () {
        if (this.table.currentPage > 0) {
            this.pageEmitter.emit(this.table.currentPage - 1);
            this.getPageList(this.table.totalPage, this.table.currentPage - 1);
        }
    };
    // 获取下一页
    TableComponent.prototype.getNextPage = function () {
        if (this.table.currentPage < this.table.totalPage - 1) {
            this.pageEmitter.emit(this.table.currentPage + 1);
            this.getPageList(this.table.totalPage, this.table.currentPage + 1);
        }
    };
    // 获取第一页
    TableComponent.prototype.getFirstPage = function () {
        this.pageEmitter.emit(0);
        this.getPageList(this.table.totalPage, 0);
    };
    // 获取最后一页
    TableComponent.prototype.getLastPage = function () {
        this.pageEmitter.emit(this.table.totalPage - 1);
        this.getPageList(this.table.totalPage, this.table.totalPage - 1);
    };
    return TableComponent;
}());
__decorate([
    core_1.Input()
], TableComponent.prototype, "table");
__decorate([
    core_1.Output()
], TableComponent.prototype, "handleEmmit");
__decorate([
    core_1.Output()
], TableComponent.prototype, "pageEmitter");
TableComponent = __decorate([
    core_1.Component({
        selector: 'app-table',
        templateUrl: 'table.component.html',
        styleUrls: ['table.component.scss']
    })
], TableComponent);
exports.TableComponent = TableComponent;
