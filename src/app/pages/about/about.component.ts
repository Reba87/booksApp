import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    public miUsuario : Usuario;
  constructor() 
  { 
    

  }

  ngOnInit(): void {
  }

}
