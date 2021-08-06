// class Usuario {
//     constructor(nombre, apellido, libros, mascotas ) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.libros = libros ;
//         this.mascotas = mascotas 
//     }

//     getFullName(){
//         console.log(`hola soy ${this.nombre} ${this.apellido}`)
//     }
//     addMascota(){
//         this.mascotas.push('mascota')
//     }
//     getMascotas(){
//         console.log(this.mascotas.length)
//     }
//     addBook(){
//         this.libros.push({nombre: 'book', autor: 'autor'})
//     }
//     getBooks(){
//         console.log(this.libros.filter(el => console.log(el.nombre)))
//     }

// }

// let diego = new Usuario('Diego','Wagner',[{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}],['Emma','Rocky'])
// diego.getFullName();
// diego.getBooks();
// diego.getMascotas()
// diego.addBook()
// diego.addMascota()
// // console.log(diego)

function Usuario(nombre, apellido, libros, mascotas ) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros ;
        this.mascotas = mascotas 
    }

    Usuario.prototype.getFullName = function(){
        console.log(`hola soy ${this.nombre} ${this.apellido}`)
    }
    Usuario.prototype.addMascota = function(){
        this.mascotas.push('mascota')
    }
    Usuario.prototype.getMascotas = function(){
        console.log(this.mascotas.length)
    }
    Usuario.prototype.addBook = function(){
        this.libros.push({nombre: 'book', autor: 'autor'})
    }
    Usuario.prototype.getBooks = function(){
        console.log(this.libros.filter(el => console.log(el.nombre)))
    }


let diego = new Usuario('Diego','Wagner',[{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}],['Emma','Rocky'])
diego.getFullName();
diego.getBooks();
diego.getMascotas()
diego.addBook()
diego.addMascota()
// console.log(diego)