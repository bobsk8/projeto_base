import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../../service/client.service";
import { Client } from "../../../model/client";
import { AppService } from "../../../service/app.service";
import { User } from "../../../model/user";
import * as FileSaver from 'file-saver';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { GoogleService } from '../../../service/google.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  clientUpdate: Client = new Client();
  user: User = new User();
  closeResult: string;
  msg: string = '';

  constructor(
    private clientService: ClientService,
    private appService: AppService,
    private modalService: NgbModal,
    private googleService: GoogleService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login) {
        this.appService.redirect('');
      }
      this.user = data;
    });

    this.getClients();
  }

  getClients() {
    this.clientService.getAll()
      .subscribe(clients => {
        this.clients = clients;
      }, err => console.log(err));
  }

  export() {
    this.clientService.export()
      .subscribe(d => {
        this.downloadFile(d)
      })
  }

  setSheets() {
    this.googleService.setSheets(this.clients)
      .subscribe(d => {
        alert('Foi')
      })
  }

  downloadFile(d) {
    let blob = d.blob();
    let filename = 'report.xlsx';
    FileSaver.saveAs(blob, filename);
  }

  open(content: any) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  updateBtn(client, contentUpdate) {
    Object.assign(this.clientUpdate, client);
    this.open(contentUpdate);
  }

  deleteBtn(client, content) {
    this.clientService.delete(client)
      .subscribe(data => {
        this.msg = 'Excluido com sucesso!';
        this.open(content)
        this.getClients();
      }, err => console.log(err))
  }

  update(content: any) {
    this.clientService.update(this.clientUpdate)
      .subscribe(data => {
        this.getClients();
        this.clientUpdate = new Client();
        this.msg = 'Alterado com sucesso!';
        this.open(content)
      }, err => console.log(err));
  }

  exclude(client: Client) {

  }

}
