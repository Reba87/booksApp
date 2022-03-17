export class Usuario {

    constructor(
        public id_usuario: number, 
        public nombre:string,
        public apellidos:string,
        public correo:string,
        public url:string,
        public password:string)
        {
            this.id_usuario = id_usuario;
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.correo = correo;
            this.url = url;
            this.password = password;

        }

        public nombreCompleto(): string {
            return this.nombre + ' ' + ' ' +  this.apellidos
        }
}
