/**
 * Form 表单类型
 * text - input 文本
 * date - input 日期
 * time - input 时间
 * datetime - input 日期和时间
 * textarea - 多行文本输入
 * editor - 富文本编辑器
 * radio - 单选按钮
 * checkbox - 多选按钮
 * dropdown - 文本下拉框
 * file - 文件上传
 */
/**
 * Form 表单类型
 * text - input 文本
 * date - input 日期
 * time - input 时间
 * datetime - input 日期和时间
 * textarea - 多行文本输入
 * editor - 富文本编辑器
 * radio - 单选按钮
 * checkbox - 多选按钮
 * dropdown - 文本下拉框
 * file - 文件上传
 */ export var FormType;
(function (FormType) {
    FormType[FormType["text"] = 0] = "text";
    FormType[FormType["date"] = 1] = "date";
    FormType[FormType["time"] = 2] = "time";
    FormType[FormType["datetime"] = 3] = "datetime";
    FormType[FormType["textarea"] = 4] = "textarea";
    FormType[FormType["editor"] = 5] = "editor";
    FormType[FormType["radio"] = 6] = "radio";
    FormType[FormType["checkbox"] = 7] = "checkbox";
    FormType[FormType["dropdown"] = 8] = "dropdown";
    FormType[FormType["file"] = 9] = "file";
})(FormType || (FormType = {}));
;
export class FormBase {
    constructor(options) {
        this.value = options.value;
        this.key = options.key;
        this.label = options.label || '';
        this.maxlength = options.maxlength || '';
        this.required = !!options.required;
        this.validated = !!options.validated;
        this.disabled = !!options.disabled;
        this.readonly = !!options.readonly;
        this.placeholder = options.placeholder || '';
        this.controlType = options.controlType || FormType.text;
        this.order = options.order || 1;
    }
}
//# sourceMappingURL=form-base.js.map