"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var form_base_1 = require("./form-base");
var FormFile = (function (_super) {
    __extends(FormFile, _super);
    function FormFile(options) {
        var _this = _super.call(this, options) || this;
        _this.controlType = form_base_1.FormType.file;
        _this.multiple = options['multiple'] || false;
        _this.url = options['url'] || '';
        return _this;
    }
    return FormFile;
}(form_base_1.FormBase));
exports.FormFile = FormFile;
