import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ActivatedRoute } from "@angular/router";
import {ClientCallServiceService} from '../../services/client-call-service.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {



  client: Client;

  constructor(private route: ActivatedRoute,private rest: ClientCallServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.client = this.getClient(params.id);
    });

  }



  getClient(id:string) {
    this.rest.getClient(id).subscribe((data: Client) => {

      return this.client = data;
    });
  }

}
