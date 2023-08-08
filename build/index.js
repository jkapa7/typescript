"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const videoClub_class_1 = require("./src/clases/videoClub.class");
const blockbuster = new videoClub_class_1.Videoclub("BlockBuster");
blockbuster.agregar_pelicula({
    id: 1,
    titulo: "Titanic",
    genero: "Drama",
    duracion: 130,
    atp: false,
});
console.log(blockbuster);
