import { Injectable, Inject } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

declare let $: any;

@Injectable()
export class UploadService {

  constructor(private http: Http) {}

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
      contentType: false, //不可缺
      processData: false, //不可缺
      success: function(data) {
        callback.UploadSuccess(data);
      },
      error: function(err) {
        callback.UploadFailure(err);
      }
    });
  }

  upload(path, data): Observable<any> {
    return this.http.post(path, data, {
      headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
    });
  }

}
