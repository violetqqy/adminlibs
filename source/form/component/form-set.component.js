"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
require("wangeditor/dist/js/wangEditor.js");
var Flatpickr = require('flatpickr');
var _entity_1 = require("../_entity");
var modal_1 = require("../../modal");
var DynamicFormSet = (function () {
    function DynamicFormSet(cdr, uploadService, dialog) {
        this.cdr = cdr;
        this.uploadService = uploadService;
        this.dialog = dialog;
        this.formControl = _entity_1.FormType;
    }
    DynamicFormSet.prototype.ngOnInit = function () {
        var _this = this;
        this.formValue = this.formdata.value;
        if (this.formdata.controlType === this.formControl.checkbox && this.formdata.options) {
            this.formValue = [];
            this.formdata.options.forEach(function (obj) {
                if (obj.checked == true) {
                    _this.formValue.push(obj.id);
                }
            });
            this.cdr.detectChanges();
        }
    };
    DynamicFormSet.prototype.ngAfterViewInit = function () {
        if (this.date) {
            new Flatpickr(this.date.nativeElement, {
                "locale": "zh",
                "defaultDate": this.formValue || ''
            });
            this.cdr.detectChanges();
        }
        if (this.time) {
            new Flatpickr(this.time.nativeElement, {
                "locale": "zh",
                "enableTime": true,
                "time_24hr": true,
                "noCalendar": true,
                "defaultDate": this.formValue || ''
            });
            this.cdr.detectChanges();
        }
        if (this.datetime) {
            new Flatpickr(this.datetime.nativeElement, {
                "locale": "zh",
                "enableTime": true,
                "time_24hr": true,
                "defaultDate": this.formValue || ''
            });
            this.cdr.detectChanges();
        }
        if (this.formdata.controlType === this.formControl.editor) {
            this.newEditor(this.formValue);
        }
    };
    DynamicFormSet.prototype.isValid = function () {
        return this.form.controls[this.formdata.key].valid;
    };
    DynamicFormSet.prototype.newEditor = function (editordata) {
        var _this = this;
        var editor = new wangEditor(this.formdata.key);
        editor.config.menus = MENU;
        editor.onchange = function () {
            _this.formValue = editor.$txt.html();
            _this.cdr.detectChanges();
        };
        editor.create();
        editor.$txt.html(editordata);
    };
    DynamicFormSet.prototype.getChecked = function (opt, id) {
        var index = this.formValue.indexOf(id);
        if (opt.checked) {
            if (index = -1) {
                this.formValue.push(id);
            }
        }
        else {
            if (index > -1) {
                this.formValue.splice(index, 1);
            }
        }
    };
    // 上传图片操作
    DynamicFormSet.prototype.uploadChange = function (files) {
        var myForm = new FormData();
        myForm.append('file', files.target.files[0]);
        this.uploadService.uploadFile(myForm, this.formdata.url, this);
    };
    DynamicFormSet.prototype.UploadSuccess = function (data) {
        if (data.code === 0) {
            this.openDialog('上传图片成功！');
            if (this.formdata.multiple === false) {
                this.formValue = data.data;
                this.cdr.detectChanges();
            }
            else {
                if (!this.formValue) {
                    this.formValue = [];
                }
                this.formValue.push(data.data);
                this.cdr.detectChanges();
            }
        }
        else {
            this.openDialog('上传图片失败！');
        }
    };
    DynamicFormSet.prototype.UploadFailure = function (data) {
        this.openDialog('上传图片失败！');
    };
    DynamicFormSet.prototype.fileDel = function (file) {
        if (!file) {
            this.formValue = '';
            $('#' + this.formdata.key).val('');
            this.cdr.detectChanges();
            this.openDialog('删除照片成功！');
        }
        else {
            var i = this.formValue.indexOf(file);
            if (i !== -1) {
                this.formValue.splice(i, 1);
                this.cdr.detectChanges();
            }
            if (this.formValue.length === 0) {
                this.formValue = null;
                $('#' + this.formdata.key).val('');
                this.cdr.detectChanges();
            }
            this.openDialog('删除照片成功！');
        }
    };
    DynamicFormSet.prototype.openDialog = function (msg) {
        var option = {
            data: new modal_1.DialogOptions({
                title: '提示信息',
                message: msg,
                buttons: [{
                        key: 'comfirm',
                        value: '确定',
                        color: 'primary'
                    }]
            }),
            width: '300px'
        };
        var dialogRef = this.dialog.open(modal_1.DialogComponent, option);
    };
    return DynamicFormSet;
}());
__decorate([
    core_1.Input()
], DynamicFormSet.prototype, "formdata");
__decorate([
    core_1.Input()
], DynamicFormSet.prototype, "form");
__decorate([
    core_1.ViewChild('formSet')
], DynamicFormSet.prototype, "formSet");
__decorate([
    core_1.ViewChild('date')
], DynamicFormSet.prototype, "date");
__decorate([
    core_1.ViewChild('time')
], DynamicFormSet.prototype, "time");
__decorate([
    core_1.ViewChild('datetime')
], DynamicFormSet.prototype, "datetime");
DynamicFormSet = __decorate([
    core_1.Component({
        selector: 'app-form-set',
        templateUrl: 'form-set.component.html',
        styleUrls: ['form.component.scss']
    })
], DynamicFormSet);
exports.DynamicFormSet = DynamicFormSet;
var MENU = [
    'source',
    '|',
    'bold',
    'underline',
    'italic',
    'strikethrough',
    'eraser',
    'forecolor',
    'bgcolor',
    '|',
    'quote',
    'fontfamily',
    'fontsize',
    'head',
    'unorderlist',
    'orderlist',
    'alignleft',
    'aligncenter',
    'alignright',
    '|',
    'link',
    'unlink',
    'table',
    '|',
    'img',
    '|',
    'undo',
    'redo',
    'fullscreen'
];
