export var ControlType;
(function (ControlType) {
    ControlType[ControlType["text"] = 0] = "text";
    ControlType[ControlType["image"] = 1] = "image";
    ControlType[ControlType["button"] = 2] = "button";
    ControlType[ControlType["date"] = 3] = "date";
})(ControlType || (ControlType = {}));
;
export class TableTitle {
    constructor(obj) {
        this.name = obj && obj.name;
        this.key = obj && obj.key;
        this.minwidth = obj && obj.minwidth || null;
        this.maxwidth = obj && obj.maxwidth || null;
        this.controlType = obj && obj.controlType || ControlType.text;
        this.option = obj && obj.option || null;
    }
}
export class TableOption {
    constructor(obj) {
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
}
//# sourceMappingURL=dtable.entity.js.map