import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ClientListComponent } from './routes/client/client-list/client-list.component';
import { ClientService } from "./service/client.service";
import { HomeComponent } from './routes/home/home.component';
import { ClientCreateComponent } from './routes/client/client-create/client-create.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    HomeComponent,
    ClientCreateComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
