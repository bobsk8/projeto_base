import { NgModule } from '@angular/core';
import { ClientListComponent } from "./routes/client/client-list/client-list.component";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./routes/home/home.component";
import { ClientCreateComponent } from "./routes/client/client-create/client-create.component";
import { LoginComponent } from "./routes/login/login.component";
import { UserCreateComponent } from "./routes/user/create/user-create.component";

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home', component: HomeComponent},
    {
      path: 'client',
      children: [
        { path: 'list', component: ClientListComponent },
        { path: 'create', component: ClientCreateComponent }
      ]
    },
    {
      path: 'user',
      children: [        
        { path: 'create', component: UserCreateComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  