import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../../service/client.service";
import { Client } from "../../../model/client";
import { AppService } from "../../../service/app.service";
import { User } from "../../../model/user";
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  user: User = new User();

  constructor(
    private clientService: ClientService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login) {
        this.appService.redirect('');
      }
      this.user = data;
    });

    this.clientService.getAll()
      .subscribe(clients => this.clients = clients);
  }

  export() {
    this.clientService.export()
      .subscribe(d => {        
        this.downloadFile(d)
      })
  }

  downloadFile(d) {
    let blob = d.blob();
    let filename = 'report.xlsx';
    FileSaver.saveAs(blob, filename);
  }

}
