"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videoclub = void 0;
const pelicula_class_1 = require("./pelicula.class");
class Videoclub {
    constructor(name) {
        this.name = name;
        this.catalogo = [];
    }
    agregar_pelicula(datos) {
        const newPelicula = new pelicula_class_1.Pelicula(datos.id, datos.titulo, datos.genero, datos.duracion, datos.atp);
        this.catalogo.push(newPelicula);
    }
}
exports.Videoclub = Videoclub;
