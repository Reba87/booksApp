import { Injectable} from '@angular/core';
import { Libro } from '../models/libro';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  

  private url="http://localhost:5000/libros"
  private urlBuscar = "http://localhost:5000/libros/buscar"


  constructor(private http: HttpClient){}

  public getLibros(idUsuario:number)
  { 
    return this.http.get(this.url + "/?id=" + idUsuario)
  }

  public getBuscar(idUsuario:number,id_libro:number)
  { 
    return this.http.get(this.urlBuscar + "?id_usuario=" + idUsuario + "&" +"id_book=" + id_libro)
  }

  public postLibro(newLibro:Libro)
  {
    return this.http.post(this.url,newLibro)
  }

  putLibro(newLibro:Libro){
    return this.http.put(this.url, newLibro)
  }

  deleteLibro(idlibro:number){
    return this.http.delete(this.url + "/?id=" + idlibro)
  }






























  // public getAll() {
  //   return this.libros;
  // }

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

  // buscar(id: number) 
  // {
  //   for (let libro of this.libros) {
  //     if (libro.id_libro == id) {
  //       for (let i = 0; i < this.libros.length; i++) {
  //         if (libro.id_libro == this.libros[i].id_libro) {
  //           let lista=[]
  //           lista.push(this.libros[i])
  //           return lista
  //         }
  //         else if(libro.id_libro == NaN) {
            
  //         }
  //       }
        
  //     }
      
  //   }
  //   return this.libros
  // }

  // public addLibro(libro: Libro) {
  //   this.libros.push(libro);
  // }

  // public putLibro(libro: Libro) {
  //   console.log('Servicio');
  //   console.log(libro);
  //   for (let book of this.libros) {
  //     if (book.id_libro == libro.id_libro) {
  //       console.log(book);
  //       if (libro.titulo != '') {
  //         book.titulo = libro.titulo;
  //       }
  //       if (libro.autor != '') {
  //         book.autor = libro.autor;
  //       }
  //       if (libro.precio.toString(10) != '') {
  //         book.precio = libro.precio;
  //       }
  //       if (libro.fotoLibro != '') {
  //         book.fotoLibro = libro.fotoLibro;
  //       }
  //     }
  //   }
  //   console.log(this.libros);
  // }

//  public deleteLibro(id: number) {
//     for (let libro of this.libros) {
//       if (libro.id_libro == id) {
//         for (let i = 0; i < this.libros.length; i++) {
//           if (libro.id_libro == this.libros[i].id_libro) {
//             this.libros.splice(i, 1);
            
//           }
//         }
//       }
//     }
//     return this.libros
//   }
}
