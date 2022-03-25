import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/shared/usuario.service';
import {Usuario} from '../../../app/models/usuario';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  constructor(private apiService: UsuarioService) { }



  insertarUsuario(
    nombre: string,
    apellidos: string,
    correo: string,
    foto: string,
    password: string,
    veryPasswords: string)
    {   
        if(password === veryPasswords){
          this.apiService.postUsuario(new Usuario(0,nombre,apellidos,correo,foto,password))
          .subscribe((data) => {
            console.log(data);
            alert("Usuario registrado")
          });
        }
        else{
          console.log("contraseñas no coinciden")
          alert("Las contraseñas no coninciden")
        }
    }

  ngOnInit(): void {
  }

}
