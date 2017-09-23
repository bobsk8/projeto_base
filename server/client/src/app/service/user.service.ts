import { Injectable } from '@angular/core';
import { User } from "../model/user";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ServiceModel } from "../model/service-model";

@Injectable()
export class UserService extends ServiceModel<User> {

  constructor(
    http: Http
  ) {
    super('v1/users', http);
  }

  getUserSession(): Observable<User> {
    return this.http.get(this.apiEndpoint + '/user-session', this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  logout(): Observable<any> {
    return this.http.get(this.apiEndpoint + '/user-logout', this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  login(Object): Observable<User> {
    return this.http.post(this.apiEndpoint + '/login', Object, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  create(Object): Observable<any> {
    return this.http.post(this.apiEndpoint, Object, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

}
