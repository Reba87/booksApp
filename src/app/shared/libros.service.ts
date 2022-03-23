import { Injectable, Output } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  private libros: Libro[];

  constructor() {
    this.libros = [
      {
        id_libro: 1,
        id_usuario: 1,
        titulo: 'Origen',
        tipoLibro: 'blando',
        autor: 'dan',
        precio: 20,
        fotoLibro:
          'https://static.cegal.es/imagenes/marcadas/9788408/978840820616.gif',
      },
    ];
  }

  public getAll() {
    return this.libros;
  }

  // public buscar(id: number) {
    

  //   for (let libro of this.libros) {
  //     if (libro.id_libro === id) {
  //       let lista =[]
  //       lista.push(libro);
  //       console.log(lista)
  //       return lista
  //     }
  //     else{
  //       return this.libros
  //     }
  //   }

    
  // }

  buscar(id: number) 
  {
    for (let libro of this.libros) {
      if (libro.id_libro == id) {
        for (let i = 0; i < this.libros.length; i++) {
          if (libro.id_libro == this.libros[i].id_libro) {
            let lista=[]
            lista.push(this.libros[i])
            return lista
          }
          else if(libro.id_libro == NaN) {
            
          }
        }
        
      }
      
    }
    return this.libros
  }

  public addLibro(libro: Libro) {
    this.libros.push(libro);
  }

  public putLibro(libro: Libro) {
    console.log('Servicio');
    console.log(libro);
    for (let book of this.libros) {
      if (book.id_libro == libro.id_libro) {
        console.log(book);
        if (libro.titulo != '') {
          book.titulo = libro.titulo;
        }
        if (libro.autor != '') {
          book.autor = libro.autor;
        }
        if (libro.precio.toString(10) != '') {
          book.precio = libro.precio;
        }
        if (libro.fotoLibro != '') {
          book.fotoLibro = libro.fotoLibro;
        }
      }
    }
    console.log(this.libros);
  }

 public deleteLibro(id: number) {
    for (let libro of this.libros) {
      if (libro.id_libro == id) {
        for (let i = 0; i < this.libros.length; i++) {
          if (libro.id_libro == this.libros[i].id_libro) {
            this.libros.splice(i, 1);
            
          }
        }
      }
    }
    return this.libros
  }
}
