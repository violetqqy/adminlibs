var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input, ViewChild } from '@angular/core';
import 'wangeditor/dist/js/wangEditor.js';
const Flatpickr = require('flatpickr');
import { FormType } from '../_entity';
import { DialogComponent, DialogOptions } from '../../dmodal';
let DynamicFormSet = class DynamicFormSet {
    constructor(cdr, uploadService, dialog) {
        this.cdr = cdr;
        this.uploadService = uploadService;
        this.dialog = dialog;
        this.formControl = FormType;
    }
    ngOnInit() {
        this.formValue = this.formdata.value;
        if (this.formdata.controlType === this.formControl.checkbox && this.formdata.options) {
            this.formValue = [];
            this.formdata.options.forEach(obj => {
                if (obj.checked == true) {
                    this.formValue.push(obj.id);
                }
            });
            this.cdr.detectChanges();
        }
    }
    ngAfterViewInit() {
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
    }
    isValid() {
        return this.form.controls[this.formdata.key].valid;
    }
    newEditor(editordata) {
        let editor = new wangEditor(this.formdata.key);
        editor.config.menus = MENU;
        editor.onchange = () => {
            this.formValue = editor.$txt.html();
            this.cdr.detectChanges();
        };
        editor.create();
        editor.$txt.html(editordata);
    }
    getChecked(opt, id) {
        let index = this.formValue.indexOf(id);
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
    }
    // 上传图片操作
    uploadChange(files) {
        let myForm = new FormData();
        myForm.append('file', files.target.files[0]);
        this.uploadService.uploadFile(myForm, this.formdata.url, this);
    }
    UploadSuccess(data) {
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
    }
    UploadFailure(data) {
        this.openDialog('上传图片失败！');
    }
    fileDel(file) {
        if (!file) {
            this.formValue = '';
            $('#' + this.formdata.key).val('');
            this.cdr.detectChanges();
            this.openDialog('删除照片成功！');
        }
        else {
            let i = this.formValue.indexOf(file);
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
    }
    openDialog(msg) {
        let option = {
            data: new DialogOptions({
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
        let dialogRef = this.dialog.open(DialogComponent, option);
    }
};
__decorate([
    Input()
], DynamicFormSet.prototype, "formdata", void 0);
__decorate([
    Input()
], DynamicFormSet.prototype, "form", void 0);
__decorate([
    ViewChild('formSet')
], DynamicFormSet.prototype, "formSet", void 0);
__decorate([
    ViewChild('date')
], DynamicFormSet.prototype, "date", void 0);
__decorate([
    ViewChild('time')
], DynamicFormSet.prototype, "time", void 0);
__decorate([
    ViewChild('datetime')
], DynamicFormSet.prototype, "datetime", void 0);
DynamicFormSet = __decorate([
    Component({
        moduleId: module.id,
        selector: 'app-form-set',
        templateUrl: 'form-set.component.html',
        styleUrls: ['form.component.scss']
    })
], DynamicFormSet);
export { DynamicFormSet };
const MENU = [
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
//# sourceMappingURL=form-set.component.js.map