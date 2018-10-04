import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../cliente.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  providers:[ClienteService]
})
export class ClienteComponent implements OnInit {

	 mensaje : Object; 


  constructor(private clienteService: ClienteService) {
  	this.mensaje = this.clienteService.obtenerClientes();
   }

  ngOnInit() {
  }

}
