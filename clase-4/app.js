const llamadaAPI = (time) => {
    let misBandas = ['Europe', 'Motley Crue', 'Poison', 'Skid Row', 'Helloween'];
        let status = Math.random();
        let respuesta = {};
        let error = null;
        if (status > 0.80) {
            error = "Veo un Error en el llamado";
        } else {
            respuesta = {
                id: Math.floor(Math.random() * 10 + 1),
                banda: misBandas[Math.floor(Math.random() * 5)]
            }
        }

        return new Promise ( (resolve, reject) => {
            //aca le mandas el setTimeOut con el time recibido por parametro
            setTimeout(()=>{
                if (error) {
                    reject(error);
                }else{
                    resolve(respuesta);
                }    
            },time)
        });
}

console.log('Inicio del Progama');

const llamada1 = llamadaAPI(3000)
    .then((respuesta)=> {
        console.log('Recibi esta info: ', respuesta);
        console.log(getRandomArbitrary(1, 100));
    })
    .catch((error)=>{ 
        console.log('lamentablemente hubo un error en el llamado a la API!! Intente nuevamente...', error);
        console.log(getRandomArbitrary(1, 100))
    });
const llamada2 = llamadaAPI(2000)
    .then((respuesta)=> {
        console.log('Recibi esta info: ', respuesta);
        console.log(getRandomArbitrary(1, 100));
    })
    .catch((error)=>{ 
        console.log('lamentablemente hubo un error en el llamado a la API!! Intente nuevamente...', error);
        console.log(getRandomArbitrary(1, 100))
    });

const llamada3 = llamadaAPI(5000)
    .then((respuesta)=> {
        console.log('Recibi esta info: ', respuesta);
        console.log(getRandomArbitrary(1, 100));
    })
    .catch((error)=>{ 
        console.log('lamentablemente hubo un error en el llamado a la API!! Intente nuevamente...', error);
        console.log(getRandomArbitrary(1, 100))
    });

const llamada4 = llamadaAPI(1000)
    .then((respuesta)=> {
        console.log('Recibi esta info: ', respuesta);
        console.log(getRandomArbitrary(1, 100));
    })
    .catch((error)=>{ 
        console.log('lamentablemente hubo un error en el llamado a la API!! Intente nuevamente...', error);
        console.log(getRandomArbitrary(1, 100))
    });

const llamada5 = llamadaAPI(4000)
    .then((respuesta)=> {
        console.log('Recibi esta info: ', respuesta);
        console.log(getRandomArbitrary(1, 100));
    })
    .catch((error)=>{ 
        console.log('lamentablemente hubo un error en el llamado a la API!! Intente nuevamente...', error);
        console.log(getRandomArbitrary(1, 100))
    });

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
for (let index = 0; index < 25; index++) {
    console.log(getRandomArbitrary(1,100));
};