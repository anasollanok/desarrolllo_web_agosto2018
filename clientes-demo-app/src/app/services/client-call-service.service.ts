import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {Client} from '../models/client';




@Injectable({
  providedIn: 'root'
})
export class ClientCallServiceService {

   endpoint = 'https://swapi.co/api/';
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };



  constructor(private http: HttpClient) { }


  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getClients(): Observable<Client> {
    return this.http.get(this.endpoint + 'people').pipe(
      map(function(res){
        return <Client> res.results;
      });
  }

  getClient(id): Observable<any> {
    return this.http.get(this.endpoint + 'people/' + id).pipe(
      map(function(res){
        console.log("Resultado en el servicio: "+res.name);
        return res;
      }));
  }

}
