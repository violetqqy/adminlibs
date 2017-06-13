import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
export declare class UploadService {
    private http;
    constructor(http: Http);
    /**
     * 上传图片(使用回调函数返回值)
     * @param data
     * @returns {string}
     */
    uploadFile(data: any, url: any, callback: any): void;
    upload(path: any, data: any): Observable<any>;
}
