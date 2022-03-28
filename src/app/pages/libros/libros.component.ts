import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../shared/libros.service';
import { Libro } from '../../models/libro';
import { UsuarioService } from '../../shared/usuario.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  public misLibros: any = [];
  public buscarLibro;
  public idUsuario = this.usuarioSerivice.usuario.id_usuario;

  constructor(
    private apiService: LibrosService,
    private usuarioSerivice: UsuarioService
  ) {
    console.log(this.idUsuario);
  }


  ngOnInit(): void {
    this.getLibros();
  }
  getLibros() {
    this.apiService.getLibros(this.idUsuario).subscribe((data) => {
      this.misLibros = data;
      console.log(data);
    });
  }

  getbuscar(id_libro: string) {
    console.log(id_libro);
    if (id_libro == '') {
      this.apiService.getLibros(this.idUsuario).subscribe((data) => {
        this.misLibros = data;
        console.log(data);
      });
    } else {
      this.apiService
        .getBuscar(Number(this.idUsuario), Number(id_libro))
        .subscribe((data) => {
          this.misLibros = data;
          console.log(data);
        });
    }
  }

  deletLibro(idLibro: number) {
    console.log("llega")
    console.log(idLibro)
    console.log(this.misLibros)
    this.apiService.deleteLibro(idLibro).subscribe((data) => {
      
        for (let i = 0; i < this.misLibros.length; i++) {
          if (idLibro == this.misLibros[i].id_libro){
            this.misLibros.splice(i, 1)
            console.log("Conseguido")
          console.log(data);
          }
            
        }
      }
    );
  }
}
