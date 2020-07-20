import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  URL = 'http://localhost/testcrud/CRUD/';

  constructor (private http: HttpClient){}

  addUser(contacto){
    return this.http.post(`${this.URL}add.php`,JSON.stringify(contacto));
  }

  allUsers(){
    return this.http.get(`${this.URL}allusers.php`);
  }

  detailUser(username:string){
    return this.http.get(`${this.URL}detailuser.php?username=${username}`);
  }

  updateUser(contacto){
    return this.http.post(`${this.URL}updateuser.php`,JSON.stringify(contacto));
  }

  deleteUser(numberdocument:any){
    return this.http.get(`${this.URL}deleteuser.php?numberdocument=${numberdocument}`);
  }
}
