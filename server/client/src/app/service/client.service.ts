import { Injectable } from '@angular/core';
import { ServiceModel } from '../model/service-model';
import { Http } from '@angular/http';
import { Client } from '../model/client';


@Injectable()
export class ClientService extends ServiceModel<Client> {

  constructor(
    http: Http
  ) {
    super('v1/clients', http);
  }

}
