import { Component, OnInit } from '@angular/core';
import {LibrosService} from '../../shared/libros.service';
import {Libro} from '../../models/libro'

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public misLibros: Libro [];
  public buscarLibro;
  constructor(private librosService: LibrosService)
  {
    this.misLibros = this.librosService.getAll();
  }
  buscar(id: number){
    console.log(id)
    this.misLibros = this.librosService.buscar(id)
    console.log(this.misLibros)
  }


  delete(id:number){
    this.misLibros = this.librosService.deleteLibro(id)
   
  }

  ngOnInit(): void {
  }

}
