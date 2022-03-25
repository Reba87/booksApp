import { Component, OnInit } from '@angular/core';
import {LibrosService} from '../../shared/libros.service';
import {Libro} from '../../models/libro'
@Component({
  selector: 'app-registrolibro',
  templateUrl: './registrolibro.component.html',
  styleUrls: ['./registrolibro.component.css']
})
export class RegistrolibroComponent implements OnInit {

  constructor(public apiService : LibrosService) {
    
  }


  nuevoLibro(      
    id_usuario:string,
    titulo:string,
    tipo:string,
    autor:string,
    precio:string,
    foto:string)
    {
      this.apiService.postLibro(new Libro(0,Number(id_usuario),titulo,tipo,autor,Number(precio),foto))
      .subscribe((data) => {
       
      console.log(data)
      
      alert("Libro creado correctamente")
      })
      
    }
    
    editLibro(
      id_libro:string,
      id_usuario:string,
      titulo:string,
      tipo:string,
      autor:string,
      precio:string,
      foto:string){
          if(id_libro == ""){
            alert("Falta el ID del libro")
          }
          else{
            
             this.apiService.putLibro(new Libro(Number(id_libro),Number(id_usuario),titulo,tipo,autor,Number(precio),foto))
            .subscribe((data) => {
              console.log(data)
              alert("Libro modificado correctamente")
            })
          }
       
          
      }
    
  ngOnInit(): void {
  }

}
