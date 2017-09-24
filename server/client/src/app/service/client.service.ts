import { Injectable } from '@angular/core';
import { ServiceModel } from '../model/service-model';
import { Http, ResponseContentType } from '@angular/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ClientService extends ServiceModel<Client> {  

  constructor(
    http: Http
  ) {
    super('v1/clients', http);
  }

  export(): Observable<ResponseContentType.Blob> {
    return this.http.get(this.apiEndpoint + '/export-clients', { responseType: ResponseContentType.Blob })      
      .catch(err => Observable.throw(err));
  }

}
