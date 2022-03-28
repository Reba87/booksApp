import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/shared/usuario.service';
import {Usuario} from '../../../app/models/usuario';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:Usuario

  constructor(private apiService: UsuarioService,private router: Router) {
  
    this.user= new Usuario()

   }

  ngOnInit(): void {
  }



  loginUsuario(form:NgForm){
    
    this.apiService.postLogin(this.user).subscribe((data:any) => {
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

//  {
//     this.apiService.postUsuario(this.user)
//             .subscribe((data) => {
//               console.log(data);
//               alert("Usuario registrado")
//             });
//     }
}
