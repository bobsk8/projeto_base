import { Injectable } from '@angular/core';
import { ServiceModel } from '../model/service-model';
import { Http } from '@angular/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GoogleService extends ServiceModel<Client> {

  constructor(
    http: Http
  ) {
    super('v1/google', http);
  }

  setSheets(datas: Client[]): Observable<any> {
    return this.http.post(this.apiEndpoint + '/set-datas',datas, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  getSheets(): Observable<any> {
    return this.http.get(this.apiEndpoint, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

}
