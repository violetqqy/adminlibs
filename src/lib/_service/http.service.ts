import { Http, Headers, Response } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {
  protected headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) {}

  /**
   * Translate Response Data to JSON
   * @param {Response} response
   */
  private getJson(response: Response) {
    return response.json();
  }

  /**
   * Translate Request Body Data from Object to JSON
   * @param {any} data
   */
  private getBody(data: any) {
    return (typeof data === 'object') ? JSON.stringify(data) : data;
  }

  /**
   * Catch Response Error
   * @param {Response} response
   */
  private checkForError(response: Response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error['response'] = response;
      throw error;
    }
  }

  /**
   * HTTP GET METHOD
   * @param  {string}     path
   * @return {Observable} 
   */
  get(path: string): Observable<any> {
    return this.http.get(path, { headers: this.headers })
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  /**
   * HTTP POST METHOD
   * @param  {string}     path
   * @param  {any}        body
   * @return {Observable}
   */
  post(path: string, body: any): Observable<any> {
    return this.http.post(path, this.getBody(body), { headers: this.headers })
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  /**
   * HTTP PUT METHOD
   * @param  {string}     path
   * @param  {any}        body
   * @return {Observable} 
   */
  put(path: string, body: any): Observable<any> {
    return this.http.put(path, this.getBody(body), { headers: this.headers })
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  /**
   * HTTP DELETE METHOD
   * @param  {string}     path
   * @return {Observable} 
   */
  delete(path: string): Observable<any> {
    return this.http.delete(path, { headers: this.headers })
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }
}
