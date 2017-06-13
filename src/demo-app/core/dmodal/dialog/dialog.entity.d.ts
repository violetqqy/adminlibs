export declare class DialogButton {
    key: string;
    value: string;
    color: string;
}
export declare class DialogForm {
    key: string;
    label: string;
    value: string;
}
export declare class DialogOptions {
    title: string;
    message: string;
    buttons: Array<DialogButton>;
    forms: Array<DialogForm>;
    constructor(obj?: {
        title: string;
        message: string;
        buttons: Array<DialogButton>;
        forms?: Array<DialogForm>;
    });
}
