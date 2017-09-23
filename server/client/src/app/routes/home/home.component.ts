import { Component, OnInit } from '@angular/core';
import { AppService } from "../../service/app.service";
import { User } from "../../model/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = new User();
  constructor(
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

}
