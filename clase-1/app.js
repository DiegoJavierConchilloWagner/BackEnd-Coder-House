class Usuario {
    constructor(nombre, apellido, libros, mascotas ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros ;
        this.mascotas = mascotas 
    }

    getFullName(){
        console.log(`hola soy ${this.nombre} ${this.apellido}`)
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    getMascotas(){
        console.log(this.mascotas.length)
    }
    addBook(nombre , autor){
        this.libros.push({nombre: nombre, autor: autor})
    }
    getBooks(){
        console.log(this.libros.filter(el => console.log(el.nombre)))
    }

}

let diego = new Usuario('Diego','Wagner',[{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}],['Emma','Rocky'])
diego.getFullName();
diego.getBooks();
diego.getMascotas()
diego.addBook( 'book' , 'autor' )
diego.addMascota( 'mascotaPepe' )
console.log(diego)

// function Usuario(nombre, apellido, libros, mascotas ) {

//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.libros = libros ;
//         this.mascotas = mascotas 
//     }

//     Usuario.prototype.getFullName = function(){
//         return`hola soy ${this.nombre} ${this.apellido}`
//     }
//     Usuario.prototype.addMascota = function(mascota){
//         this.mascotas.push(mascota)
//     }
//     Usuario.prototype.getMascotas = function(){
//         console.log(this.mascotas.length)
//     }
//     Usuario.prototype.addBook = function(nombre , autor){
//         this.libros.push({nombre: nombre, autor: autor})
//     }
//     Usuario.prototype.getBooks = function(){
//         console.log(this.libros.filter(el => console.log(el.nombre)))
//     }


// let diego = new Usuario('Diego','Wagner',[{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}],['Emma','Rocky'])
// diego.getFullName();
// diego.getBooks();
// diego.getMascotas()
// diego.addBook( 'book' , 'autor' )
// diego.addMascota( 'mascotaPepe' )
// console.log(diego)