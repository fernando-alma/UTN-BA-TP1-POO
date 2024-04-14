import { Autor } from "./entities/Autor";
import { Biblioteca } from "./entities/Biblioteca";
import { LibroImpreso } from "./entities/LibroImpreso";

 const juan = new Autor("juan","perez")
 const pedro = new Autor("pedro","gutierrez")

 const libro1 = new LibroImpreso("El señor de los anillos", juan)
 const libro2 = new LibroImpreso("El zapato roto", pedro)

 const biblioteca : Biblioteca = new Biblioteca()
 biblioteca.agregarLibro(libro1)
 biblioteca.agregarLibro(libro2)

 biblioteca.mostrarCatalogo()