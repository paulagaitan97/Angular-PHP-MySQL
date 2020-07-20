import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/shared/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/private/navbar/navbar.component';
import { AdduserService } from './services/adduser.service';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUserComponent } from './components/private/list-user/list-user.component';
import { EdituserComponent } from './components/private/edituser/edituser.component';
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HomeComponent,
    NavbarComponent,
    ListUserComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AdduserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
