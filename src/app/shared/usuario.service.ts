import { Injectable } from '@angular/core';
import {Usuario} from '../../app/models/usuario';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private url = "http://localhost:5000/usuarios"
  private urlLogin ="http://localhost:5000/loginusuarios"
  public logueado=false
  public usuario:Usuario
  
  constructor(private http: HttpClient) { }

  getUsuario(id:number){
    return this.http.get(this.url + "/id=" + id)
  }


  postUsuario(newUser:Usuario){
    
    return this.http.post(this.url,newUser)
  }

  postLogin(newUser:Usuario){
    return this.http.post(this.urlLogin,newUser)
  }

}
