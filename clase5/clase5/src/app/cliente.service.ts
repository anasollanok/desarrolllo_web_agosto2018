import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private _http:Http) { }

  obtenerClientes():Object {
  	return {name: "juan"};
  }
}

