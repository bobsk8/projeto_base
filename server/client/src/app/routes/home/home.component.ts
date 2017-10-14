import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from "../../service/app.service";
import { User } from "../../model/user";
import { UploadService } from '../../service/upload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = new User();
  constructor(
    private appService: AppService,
    private el: ElementRef,
    private uploadService: UploadService
  ) { }

  ngOnInit() {
    this.appService.auth().subscribe(data => {
      if (!data.login) {
        this.appService.redirect('');
      }
      this.user = data;
    });    
  }

  upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      formData.append('photo', inputEl.files.item(0));
      this.uploadService.upload(formData)
        .subscribe(data => {
          console.log(data._body);
        });
    }
  }

}
