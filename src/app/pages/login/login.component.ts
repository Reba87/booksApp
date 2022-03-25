import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/shared/usuario.service';
import {Usuario} from '../../../app/models/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: UsuarioService,private router: Router) { }

  ngOnInit(): void {
  }

  loginUsuario(
    correo:string,
    password:string
  ){
    let usuario = new Usuario(0,"","",correo,"",password);
    this.apiService.postLogin(usuario).subscribe((data:any) => {
      if(data.length == 0 ){
        alert("datos invalidos")
      }
      else{
        console.log(data);
        this.apiService.logueado = true
        this.apiService.usuario = data[0]
        this.router.navigate(['/libros'])
      }
      
    })
  }
}
