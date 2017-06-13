export class DialogButton {
}
export class DialogForm {
}
export class DialogOptions {
    constructor(obj) {
        this.title = obj && obj.title || '';
        this.message = obj && obj.message || '';
        this.buttons = obj && obj.buttons || [];
        this.forms = obj && obj.forms || [];
    }
}
//# sourceMappingURL=dialog.entity.js.map