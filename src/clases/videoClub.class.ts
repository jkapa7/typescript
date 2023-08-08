import { Video } from "../interfaces/video.interface";
import { Catalogo } from "../types/catalogo.type";
import { Pelicula } from "./pelicula.class";

export class Videoclub {
  public name: string;
  public catalogo: Catalogo;

  constructor(name: string) {
    this.name = name;
    this.catalogo = [];
  }

  agregar_pelicula(datos: Video) {
    const newPelicula = new Pelicula(
      datos.id,
      datos.titulo,
      datos.genero,
      datos.duracion,
      datos.atp
    );

    this.catalogo.push(newPelicula);
  }
}
