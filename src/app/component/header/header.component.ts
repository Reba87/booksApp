import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/shared/usuario.service';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  routerLink

  constructor(public apiService: UsuarioService) { 
    
  }
  
  ngOnInit(): void {
    this.routerLink='home'
  }

}
