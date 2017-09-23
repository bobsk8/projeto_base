import { Injectable, Inject } from '@angular/core';
import { ConnectionBackend, Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';


@Injectable()
export class ServiceModel<T> {

  protected apiEndpoint;
  apiURI = environment.apiURL + 'api/';
  headers = new Headers({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  });
  options = new RequestOptions({
    headers: this.headers,
    withCredentials: true,
  })

  constructor(
    path: string,
    protected http: Http
  ) {
    this.apiEndpoint = this.apiURI + path;
  }

  getAll(): Observable<T[]> {
    return this.http.get(this.apiEndpoint, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  getById(id: number|string): Observable<T> {
    return this.http.get(this.apiEndpoint + '/' + id, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  create(T): Observable<T> {
    return this.http.post(this.apiEndpoint, T, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }
  update(T): Observable<T> {
    return this.http.put(this.apiEndpoint + '/' + T.id, T, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }
  delete(T): Observable<T> {
    return this.http.delete(this.apiEndpoint + '/' + T.id, this.options)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }
}
