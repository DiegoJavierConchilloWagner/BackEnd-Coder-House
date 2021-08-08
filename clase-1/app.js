class Usuario {
    constructor(nombre, apellido, libros, mascotas ) {
        this.nombre = nombre ||'';
        this.apellido = apellido || '';
        this.libros = libros || [];
        this.mascotas = mascotas || [];
    }

    getFullName(){
        return `hola soy ${this.nombre} ${this.apellido}`
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    getMascotas(){
        return this.mascotas.length
    }
    addBook(nombre , autor){
        this.libros.push({nombre: nombre, autor: autor})
    }
    getBooks(){
        // return this.libros.filter(el => console.log(el.nombre))
        return this.libros.map(el => el.nombre)
    }

}

let diego = new Usuario('Diego','Wagner',[{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}],['Emma','Rocky'])
console.log(diego.getFullName());
console.log(diego.getBooks())
console.log(diego.getMascotas())
diego.addBook( 'book' , 'autor' );
diego.addMascota( 'mascotaPepe' );
console.log(diego)

// function Usuario(nombre, apellido, libros, mascotas ) {

//             this.nombre = nombre ||'';
//             this.apellido = apellido || '';
//             this.libros = libros || [];
//             this.mascotas = mascotas || [];
//     }

//     Usuario.prototype.getFullName = function(){
//         return `hola soy ${this.nombre} ${this.apellido}`
//     }
//     Usuario.prototype.addMascota = function(mascota){
//         this.mascotas.push(mascota)
//     }
//     Usuario.prototype.getMascotas = function(){
//         return this.mascotas.length
//     }
//     Usuario.prototype.addBook = function(nombre , autor){
//         this.libros.push({nombre: nombre, autor: autor})
//     }
//     Usuario.prototype.getBooks = function(){
//         return this.libros.map(el => el.nombre)
//     }


// let diego = new Usuario('Diego','Wagner',[{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}],['Emma','Rocky'])
// console.log(diego.getFullName());
// console.log(diego.getBooks())
// console.log(diego.getMascotas())
// diego.addBook( 'book' , 'autor' );
// diego.addMascota( 'mascotaPepe' );
// console.log(diego)