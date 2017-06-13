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
export declare enum FormType {
    text = 0,
    date = 1,
    time = 2,
    datetime = 3,
    textarea = 4,
    editor = 5,
    radio = 6,
    checkbox = 7,
    dropdown = 8,
    file = 9,
}
export declare class FormBase<T> {
    value: T;
    key: string;
    label: string;
    maxlength: string;
    required: boolean;
    validated: boolean;
    disabled: boolean;
    readonly: boolean;
    placeholder: string;
    controlType: FormType;
    order: number;
    constructor(options: {
        value: T;
        key: string;
        label?: string;
        maxlength?: string;
        required?: boolean;
        validated?: boolean;
        disabled?: boolean;
        readonly?: boolean;
        placeholder?: string;
        controlType?: FormType;
        order?: number;
    });
}
