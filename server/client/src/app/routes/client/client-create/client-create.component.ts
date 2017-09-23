import { Component, OnInit } from '@angular/core';
import { Client } from "../../../model/client";
import { ClientService } from "../../../service/client.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Modal } from "../../../model/modal";
import { AppService } from "../../../service/app.service";
import { User } from "../../../model/user";



@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = new Client();
  modalContent = new Modal();
  user: User = new User();

  constructor(
    private clientService: ClientService,
    private activeModal: NgbModal,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {      
      if (!data.login) {        
        this.appService.redirect('');
      }      
      this.user = data;            
    });
  }

  submit(client,modal){
    this.clientService.create(client)
    .subscribe(d => {
      this.modalContent.title = 'Salvo com sucesso!'
      this.modalContent.body = 'Seu cliente pode ser visualizado na tela de Lista Clientes';
      this.activeModal.open(modal).result
        .then(result => {
          client = new Client();
        });

    });
  }

}
