import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/shared/usuario.service';
import {Usuario} from '../../../app/models/usuario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

    public user:Usuario

  constructor(private apiService: UsuarioService) { 
    this.user= new Usuario()
  }



  // insertarUsuario(
  //   nombre: string,
  //   apellidos: string,
  //   correo: string,
  //   foto: string,
  //   password: string,
  //   veryPasswords: string)
  //   {   
  //       if(password === veryPasswords){
  //         this.apiService.postUsuario(new Usuario())
  //         .subscribe((data) => {
  //           console.log(data);
  //           alert("Usuario registrado")
  //         });
  //       }
  //       else{
  //         console.log("contraseñas no coinciden")
  //         alert("Las contraseñas no coninciden")
  //       }
  //   }

  insertarUsuario(form:NgForm){
    this.apiService.postUsuario(this.user)
            .subscribe((data) => {
              console.log(data);
              alert("Usuario registrado")
            });
    }

  ngOnInit(): void {
  }

}
