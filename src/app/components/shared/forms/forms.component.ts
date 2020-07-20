import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdduserService} from '../../../services/adduser.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  contacto: FormGroup;
  submitted = false;
  
  typeDocuments:string[] = ["Cedula de extranjeria","Cedula de Ciudadania","Otro"];
  selectedValue: '-- Seleccione --';
  constructor(private servicioformulario: AdduserService, private formBuilder: FormBuilder, private http:HttpClient) { }


  ngOnInit(): void {
    this.contacto = this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      numberdocument:['',Validators.required],
      typedocument:['',Validators.required],
      email:['',Validators.email],
      cellphone:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
      
    });
    
  }

  onSubmit(){
    if(this.contacto.valid){
      this.servicioformulario.addUser(this.contacto.value).subscribe(
        datos => {
          if(datos['resultado'] == 'OK'){
            alert(datos['mensaje']);
          }
        }
      )
      alert('Mensaje enviado !'+JSON.stringify(this.contacto.value));
    }else{
      alert('Complete el formulario de registro.');
    }
    
  }

}
