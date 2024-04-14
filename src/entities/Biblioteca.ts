import { LibroImpreso } from "./LibroImpreso";

export class Biblioteca {
    private libros :  LibroImpreso[] = []
    
    agregarLibro(libro: LibroImpreso): LibroImpreso{
        this.libros.push(libro)
        console.log(`Libro agregado a la biblioteca: ${libro.obtenerResumen()} `)
        return libro
        
    }

    mostrarCatalogo(): LibroImpreso[]{
        console.log("Catálogo de la Biblioteca: ")
        this.libros.forEach((libro) => {
             console.log(libro.obtenerResumen())

        })
        return this.libros
    }
}