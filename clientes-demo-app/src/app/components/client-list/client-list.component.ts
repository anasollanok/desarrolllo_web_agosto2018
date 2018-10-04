import { Component, OnInit } from '@angular/core';
import {Client} from '../../models/client';
import {ClientCallServiceService} from '../../services/client-call-service.service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {


  clients = new Array<Client>();

  tableStyle1 =  {
    "color" : "white",
    "background-color" : "gray",
    "font-size" : "15px",
    "padding" : "20px",
    "color":"white"
  };

  tableStyle2 =  {
    "color" : "black",
    "background-color" : "white",
    "fompont-size" : "10px",
    "padding" : "20px"
  };
  constructor(public rest: ClientCallServiceService) { }

  ngOnInit() {
    this.getClients();
  }


  getClients() {
    this.clients = new Array<Client>();
    this.rest.getClients().subscribe((data: any) => {
      console.log(data);
      this.clients = data;
    });
  }

}
