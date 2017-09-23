import { Component, OnInit } from '@angular/core';
import { UserService } from "../../service/user.service";
import { AppService } from "../../service/app.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private userService: UserService,
    private appService: AppService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.userService.logout()
    .subscribe(d => {
      if(d.success){
        this.appService.redirect('');
      }
    })
  }

}
