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
var FormDatetime = (function (_super) {
    __extends(FormDatetime, _super);
    function FormDatetime(options) {
        var _this = _super.call(this, options) || this;
        _this.controlType = form_base_1.FormType.datetime;
        return _this;
    }
    return FormDatetime;
}(form_base_1.FormBase));
exports.FormDatetime = FormDatetime;
