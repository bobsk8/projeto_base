import { Injectable } from '@angular/core';
import { User } from "../model/user";
import { Router } from '@angular/router';
import { UserService } from "./user.service";
import { Observable } from "rxjs/Rx"

@Injectable()
export class AppService {
  
  user: User;
  router: Router;

  constructor(
    router: Router,
    private userService: UserService
  ) {
    this.router = router;
  }

  auth(): Observable<User> {
    return this.userService.getUserSession();
  }

  redirect(path: string) {
    this.router.navigate([path]);
  }

  isAdm(){
    if(this.user.role_id===1){
      return true;
    }
    return false;
  }

}
