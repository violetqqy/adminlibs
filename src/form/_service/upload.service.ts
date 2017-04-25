import { Injectable, Inject } from "@angular/core";

declare let $: any;

@Injectable()
export class UploadService {

  constructor() {}

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

}
