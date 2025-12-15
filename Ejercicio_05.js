// Creamos una Función cuyo parametro será el callback
function tomarDatos(){
    // Luego mostramos los datos
    console.log("Mostramos los datos");
    return new Promise((resolve, reject) => {
        // Usamos el setTimeout con un tiempo de 2000 mls = 2 segundos
        setTimeout(() =>{
            // Creamos una constante a la cual le asignaremos un objeto
            const datos = { id : 2, valor : "Jaider Esparza"};
            // Mostramos los datos dentro del objeto
            console.log(`Datos Tomados: ${datos.id}`);
            console.log(`Datos Tomados: ${datos.valor}`);
            // Utilizamos el callback a la cual le agregaremos un argumento que será datos
            resolve(datos);
        }, 2000)
    });
}
// Creamos la función procesarDatos cuyo parametro será datosAnteriores
// este parametro almacenará el valor del callback 
function procesarDatos(datosAnteriores){
    // Mostramos los datos
    console.log(`Procesando Datos: ID - ${datosAnteriores.id} - VALOR ${datosAnteriores.valor}`);
    return new Promise((resolve, reject) => {
        // Utilizamos otro setTimeout con un tiempo igual al anterior
        setTimeout(() => {
            console.log(`Paso siguiente: ${datosAnteriores}`);
            // Ahora llamamos a la función mostrarDatos cuyo argumento será el valor retornado 
            // de la función procesar datos
            resolve(datosAnteriores);
        } ,2000)
    });
}
// Por ultimo, creamos la función mostrar Datos, cuyo parametro será los datos almacenados en procesarDatos
function mostrarResultado(datosProcesados){
    return new Promise((resolve, reject) => {
        // Utilizamos un setTimeout para mostrar los datos
        setTimeout(() => {
            resolve(`ID: ${datosProcesados.id} - Valor Original: ${datosProcesados.valor}`);
        }, 2000)
    });
}
// Ahora utilizamos el .then para hacer uso de las promesas
tomarDatos() 
    // Utilizaremos el .then para que en caso de que se cumpla
    .then((resultado) => {
        // Retornara una nueva promesa y se enviará un argumento
        // y así sucesivamente mientras se cumple la condición
        return new procesarDatos(resultado);
    })
    .then((datosProcesados) => {
        return new mostrarResultado(datosProcesados)
    })
    .then((datosProcesados) => {
        console.log(datosProcesados);
    })
    // En caso de que no se cumpla, se mostrará el siguiente error
    .catch((error) => {
        console.error(error);
    })