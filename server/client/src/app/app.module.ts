import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoadingModule } from 'ngx-loading';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientListComponent } from './routes/client/client-list/client-list.component';
import { ClientService } from "./service/client.service";
import { HomeComponent } from './routes/home/home.component';
import { ClientCreateComponent } from './routes/client/client-create/client-create.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './routes/login/login.component';
import { AppService } from "./service/app.service";
import { UserService } from "./service/user.service";
import { UserCreateComponent } from './routes/user/create/user-create.component';
import { GoogleService } from './service/google.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    HomeComponent,
    ClientCreateComponent,
    MenuComponent,
    LoginComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    LoadingModule,
    NgbModule.forRoot()
  ],
  providers: [ClientService, UserService,AppService, GoogleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
