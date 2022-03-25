import { Component, OnInit } from '@angular/core';
import {LibrosService} from '../../shared/libros.service';
import {Libro} from '../../models/libro'
import {UsuarioService} from '../../shared/usuario.service'

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public misLibros:any = []
  public buscarLibro;
  public idUsuario = this.usuarioSerivice.usuario.id_usuario
  
  constructor(private apiService: LibrosService,private usuarioSerivice:UsuarioService){
    console.log(this.idUsuario)
  }
  
 
  // buscar(id: number){
  //   console.log(id)
  //   this.misLibros = this.librosService.buscar(id)
  //   console.log(this.misLibros)
  // }


  // delete(id:number){
  //   this.misLibros = this.librosService.deleteLibro(id)
   
  // }

  ngOnInit(): void {
    this.getLibros();
  }
  getLibros(){
    this.apiService.getLibros(this.idUsuario)
    .subscribe((data)=>{
      this.misLibros = data
      console.log(data);
     
  })
  }

  getbuscar(id_libro:string) {
    console.log(id_libro)
    if(id_libro == ""){
      this.apiService.getLibros(this.idUsuario)
    .subscribe((data)=>{
      this.misLibros = data
      console.log(data);
     
  })
    }else{
      this.apiService.getBuscar(Number(this.idUsuario),Number(id_libro))
      .subscribe((data)=>{
        this.misLibros = data
        console.log(data);
      })
  
    }
   
  }

  deletLibro(idLibro:string){
    this.apiService.deleteLibro(Number(idLibro))
    .subscribe((data) => {
      this.misLibros.splice(this.misLibros.indexOf(idLibro))
      console.log(data);
    })

  }

}
