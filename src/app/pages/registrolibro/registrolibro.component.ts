import { Component, OnInit } from '@angular/core';
import {LibrosService} from '../../shared/libros.service';
import {Libro} from '../../models/libro'
@Component({
  selector: 'app-registrolibro',
  templateUrl: './registrolibro.component.html',
  styleUrls: ['./registrolibro.component.css']
})
export class RegistrolibroComponent implements OnInit {

  constructor(public librosService : LibrosService) {
    
  }


  nuevoLibro(
    id_libro:string,
    id_usuario:string,
    titulo:string,
    tipo:string,
    autor : string,
    precio: string,
    URL:string)
    {
      let libros = new Libro (Number(id_libro),Number(id_usuario),titulo,tipo,autor,Number(precio),URL)
      
      this.librosService.addLibro (libros);
      
     console.log(libros)
      
    }
    
    editLibro(id_libro:string,
      id_usuario:string,
      titulo:string,
      tipo:string,
      autor : string,
      precio: string,
      url:string){
               
          let libros = new Libro (Number(id_libro),Number(id_usuario),titulo,tipo,autor,Number(precio),url)
          // console.log(libros)
          this.librosService.putLibro(libros)
          

        
      }
    
  ngOnInit(): void {
  }

}
