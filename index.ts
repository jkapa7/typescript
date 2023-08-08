import { Videoclub } from "./src/clases/videoClub.class";

const blockbuster: Videoclub = new Videoclub("BlockBuster");

blockbuster.agregar_pelicula({
  id: 1,
  titulo: "Titanic",
  genero: "Drama",
  duracion: 130,
  atp: false,
});

console.log(blockbuster);
