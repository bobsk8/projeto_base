import { Injectable } from '@angular/core';
import { ServiceModel } from '../model/service-model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UploadService extends ServiceModel<any> {

  constructor(
    http: Http
  ) {
    super('v1/uploads', http);
  }

  upload(formdata: FormData): Observable<any> {
    return this.http.post(this.apiEndpoint, formdata)
      .catch(err => Observable.throw(err));
  }

}
