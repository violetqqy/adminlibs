"use strict";
exports.__esModule = true;
var ControlType;
(function (ControlType) {
    ControlType[ControlType["text"] = 0] = "text";
    ControlType[ControlType["image"] = 1] = "image";
    ControlType[ControlType["button"] = 2] = "button";
    ControlType[ControlType["date"] = 3] = "date";
})(ControlType = exports.ControlType || (exports.ControlType = {}));
;
var TableTitle = (function () {
    function TableTitle(obj) {
        this.name = obj && obj.name;
        this.key = obj && obj.key;
        this.minwidth = obj && obj.minwidth || null;
        this.maxwidth = obj && obj.maxwidth || null;
        this.controlType = obj && obj.controlType || ControlType.text;
        this.option = obj && obj.option || null;
    }
    return TableTitle;
}());
exports.TableTitle = TableTitle;
var TableOption = (function () {
    function TableOption(obj) {
        this.titles = obj && obj.titles || null;
        this.lists = obj && obj.lists || [];
        this.totalPage = obj && obj.totalPage || null;
        this.currentPage = obj && obj.currentPage || null;
        this.size = obj && obj.size || 10;
        this.errorMessage = obj && obj.errorMessage || '';
        this.queryKey = obj && obj.queryKey || '';
        this.loading = obj && obj.loading || true;
        this.ifPage = obj && obj.ifPage || false;
    }
    return TableOption;
}());
exports.TableOption = TableOption;
