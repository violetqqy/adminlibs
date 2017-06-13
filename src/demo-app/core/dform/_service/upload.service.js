var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
import { Headers } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
let UploadService = class UploadService {
    constructor(http) {
        this.http = http;
    }
    /**
     * 上传图片(使用回调函数返回值)
     * @param data
     * @returns {string}
     */
    uploadFile(data, url, callback) {
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                callback.UploadSuccess(data);
            },
            error: function (err) {
                callback.UploadFailure(err);
            }
        });
    }
    upload(path, data) {
        return this.http.post(path, data, {
            headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
        });
    }
};
UploadService = __decorate([
    Injectable()
], UploadService);
export { UploadService };
//# sourceMappingURL=upload.service.js.map