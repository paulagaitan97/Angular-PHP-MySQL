import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsComponent} from './components/shared/forms/forms.component';

import {NavbarComponent} from './components/private/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ListUserComponent } from './components/private/list-user/list-user.component';
import { EdituserComponent } from './components/private/edituser/edituser.component';


const routes: Routes = [
      { path: 'home', component: HomeComponent},
      { path: 'forms', component: FormsComponent},
      { path: 'alluser', component: ListUserComponent},
      { path: 'user/:id', component: EdituserComponent},
      { path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
