import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AdduserService} from '../../../services/adduser.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  getusers=null;
  constructor(private servicioformulario: AdduserService,private http:HttpClient) { }


  ngOnInit(): void {
    this.listUsers();
  }
  listUsers(){
    this.servicioformulario.allUsers().subscribe(
      datos => this.getusers = datos
    );
  }

  deleteUsers(numberDocument){
    this.servicioformulario.deleteUser(numberDocument).subscribe(
      datos => {
        if(datos['resultado'] == 'OK'){
          alert("Usuario eliminado exitosamente!");
          this.listUsers();
        }
      }
    )
  }

}
