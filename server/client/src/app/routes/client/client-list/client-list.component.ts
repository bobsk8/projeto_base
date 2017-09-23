import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../../service/client.service";
import { Client } from "../../../model/client";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.clientService.getAll()
    .subscribe(clients => this.clients = clients);
  }

}
