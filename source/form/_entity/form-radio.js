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
var FormRadio = (function (_super) {
    __extends(FormRadio, _super);
    function FormRadio(options) {
        var _this = _super.call(this, options) || this;
        _this.controlType = form_base_1.FormType.radio;
        _this.options = [];
        _this.options = options['options'] || [];
        return _this;
    }
    return FormRadio;
}(form_base_1.FormBase));
exports.FormRadio = FormRadio;
