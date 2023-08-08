import { Video } from "../interfaces/video.interface";

//ESTA CLASE QUE CREAMOS IMPLEMENTA LA INTERFACE VIDEO,
//DEBE CUMPLIR CON LAS PROPIEDADES QUE TIENE LA INTERFACE
export class Pelicula implements Video {
  constructor(
    public id: number,
    public titulo: string,
    public genero: string,
    public duracion: number,
    public atp: boolean
  ) {}
}
