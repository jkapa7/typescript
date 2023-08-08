"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
//ESTA CLASE QUE CREAMOS IMPLEMENTA LA INTERFACE VIDEO,
//DEBE CUMPLIR CON LAS PROPIEDADES QUE TIENE LA INTERFACE
class Pelicula {
    constructor(id, titulo, genero, duracion, atp) {
        this.id = id;
        this.titulo = titulo;
        this.genero = genero;
        this.duracion = duracion;
        this.atp = atp;
    }
}
exports.Pelicula = Pelicula;
