import { OnInit, EventEmitter } from '@angular/core';
import { TableOption, ControlType } from './dtable.entity';
export declare class DTableComponent implements OnInit {
    table: TableOption;
    handleEmmit: EventEmitter<{}>;
    pageEmitter: EventEmitter<{}>;
    pageList: Array<any>;
    controlType: typeof ControlType;
    constructor();
    ngOnInit(): void;
    gotoHandle(key: any, value: any): void;
    getPageList(total: any, current: any): void;
    getCurrentPage(page: any): void;
    getPrePage(): void;
    getNextPage(): void;
    getFirstPage(): void;
    getLastPage(): void;
}
