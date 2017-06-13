var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ControlType } from './dtable.entity';
let DTableComponent = class DTableComponent {
    constructor() {
        this.handleEmmit = new EventEmitter();
        this.pageEmitter = new EventEmitter();
        this.pageList = [];
        this.controlType = ControlType;
    }
    ngOnInit() {
        if (this.table.ifPage) {
            this.getPageList(this.table.totalPage, this.table.currentPage);
        }
    }
    gotoHandle(key, value) {
        this.handleEmmit.emit({ key: key, value: value });
    }
    getPageList(total, current) {
        this.pageList = [];
        if (total <= 6) {
            for (let i = 0; i < total; i++) {
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
    }
    // 获取指定页
    getCurrentPage(page) {
        if (page !== '...') {
            this.pageEmitter.emit(page - 1);
            this.getPageList(this.table.totalPage, page - 1);
        }
    }
    // 获取前一页
    getPrePage() {
        if (this.table.currentPage > 0) {
            this.pageEmitter.emit(this.table.currentPage - 1);
            this.getPageList(this.table.totalPage, this.table.currentPage - 1);
        }
    }
    // 获取下一页
    getNextPage() {
        if (this.table.currentPage < this.table.totalPage - 1) {
            this.pageEmitter.emit(this.table.currentPage + 1);
            this.getPageList(this.table.totalPage, this.table.currentPage + 1);
        }
    }
    // 获取第一页
    getFirstPage() {
        this.pageEmitter.emit(0);
        this.getPageList(this.table.totalPage, 0);
    }
    // 获取最后一页
    getLastPage() {
        this.pageEmitter.emit(this.table.totalPage - 1);
        this.getPageList(this.table.totalPage, this.table.totalPage - 1);
    }
};
__decorate([
    Input()
], DTableComponent.prototype, "table", void 0);
__decorate([
    Output()
], DTableComponent.prototype, "handleEmmit", void 0);
__decorate([
    Output()
], DTableComponent.prototype, "pageEmitter", void 0);
DTableComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'lib-table',
        templateUrl: 'dtable.component.html',
        styleUrls: ['dtable.component.scss']
    })
], DTableComponent);
export { DTableComponent };
//# sourceMappingURL=dtable.component.js.map