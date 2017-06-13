"use strict";
exports.__esModule = true;
var DialogButton = (function () {
    function DialogButton() {
    }
    return DialogButton;
}());
exports.DialogButton = DialogButton;
var DialogForm = (function () {
    function DialogForm() {
    }
    return DialogForm;
}());
exports.DialogForm = DialogForm;
var DialogOptions = (function () {
    function DialogOptions(obj) {
        this.title = obj && obj.title || '';
        this.message = obj && obj.message || '';
        this.buttons = obj && obj.buttons || [];
        this.forms = obj && obj.forms || [];
    }
    return DialogOptions;
}());
exports.DialogOptions = DialogOptions;
