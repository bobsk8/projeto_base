import { NgModule } from '@angular/core';
import { ClientListComponent } from "./routes/client/client-list/client-list.component";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./routes/home/home.component";
import { ClientCreateComponent } from "./routes/client/client-create/client-create.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
    {
      path: 'client',
      children: [
        { path: 'list', component: ClientListComponent },
        { path: 'create', component: ClientCreateComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  