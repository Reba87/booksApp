import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

    public miUsuario : Usuario
  constructor() 
  { 
    this.miUsuario = new Usuario
    (
    1,
    "",
    "",
    "",
    "",
    ""
    );
  }

  enviar(nuevoName : string,
          nuevoApellidos : string,
          nuevoCorreo : string,
          nuevoURL : string,
          nuevoPassword : string){
    console.log(this.miUsuario)
    if(nuevoName != ""){
      this.miUsuario.nombre = nuevoName;
    }
    if(nuevoApellidos != ""){
      this.miUsuario.apellidos =nuevoApellidos;
    }
    if(nuevoCorreo != ""){
      this.miUsuario.correo = nuevoCorreo;
    }
    if(nuevoURL != ""){
      this.miUsuario.url = nuevoURL;
    }
    if(nuevoPassword != ""){
      this.miUsuario.password = nuevoPassword;
    }
    
    console.log(this.miUsuario);
  }

  ngOnInit(): void {
  }

}
