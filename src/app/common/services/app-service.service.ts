import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AppServiceService {

  private url = 'http://localhost:3000/api/network/';

  constructor(private http: Http) { }

  private headers = new Headers({
		'Content-Type' : 'application/json'
  });
  
  addCommandNetwork(networkObj): Observable<void> {
    return this.http.post(this.url, networkObj, {headers:this.headers})
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || { message: "Server Error" }));
  }

}
