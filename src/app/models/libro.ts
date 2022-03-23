export class Libro {

    constructor(
        public id_libro:number,
        public id_usuario:number,
        public titulo:string,
        public tipoLibro:string,
        public autor:string,
        public precio:number,
        public fotoLibro:string
    )
    
    {
        this.id_libro = id_libro;
        this.id_usuario = id_usuario;
        this.titulo = titulo;
        this.tipoLibro = tipoLibro;
        this.autor = autor;
        this.precio = precio;
        this.fotoLibro = fotoLibro;
    }
    
    
    
}
