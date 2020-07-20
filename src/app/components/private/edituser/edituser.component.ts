import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdduserService} from '../../../services/adduser.service';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  getuser=null;
  contacto: FormGroup;
  update:any;
  id: any;
  constructor(private servicioformulario: AdduserService, private formBuilder: FormBuilder, private http:HttpClient, private rutaActiva: ActivatedRoute) { }


  ngOnInit(): void {
    this.detailuser();

    this.contacto = this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.email],
      numberdocument:['',Validators.required],
      cellphone:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
      
    });
    
  }

  detailuser(){
    const username = this.rutaActiva.snapshot.paramMap.get('id').toString();
    this.servicioformulario.detailUser(username).subscribe(
      datosuser => this.getuser = datosuser
    );
  }
  onSubmit(){
    if(this.contacto.valid){
      this.servicioformulario.updateUser(this.contacto.value).subscribe(
        datos => this.update = datos
      );
      alert('Mensaje enviado !'+JSON.stringify(this.contacto.value));
      alert('Datos Actualizados');
    }else{
      alert('Complete el formulario de actualizacion.');
    }
    
  }

}
