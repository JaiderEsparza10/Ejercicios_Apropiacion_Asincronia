// Creamos una Función cuyo parametro será el callback
function tomarDatos(callback){
    // Luego mostramos los datos
    console.log("Mostramos los datos");
    // Usamos el setTimeout con un tiempo de 2000 mls = 2 segundos
    setTimeout(() =>{
        // Creamos una constante a la cual le asignaremos un objeto
        const datos = { id : 2, valor : "Jaider Esparza"};
        // Mostramos los datos dentro del objeto
        console.log(`Datos Tomados: ${datos.id}`);
        console.log(`Datos Tomados: ${datos.valor}`);
        // Utilizamos el callback a la cual le agregaremos un argumento que será datos
        callback(datos);
    }, 2000)
}
// Creamos la función procesarDatos cuyo parametro será datosAnteriores
// este parametro almacenará el valor del callback 
function procesarDatos(datosAnteriores){
    // Mostramos los datos
    console.log(`Procesando Datos: ID - ${datosAnteriores.id} - VALOR ${datosAnteriores.valor}`);
    // Utilizamos otro setTimeout con un tiempo igual al anterior
    setTimeout(() => {
        console.log(`Paso siguiente: ${datosAnteriores}`);
        // Ahora llamamos a la función mostrarDatos cuyo argumento será el valor retornado 
        // de la función procesar datos
        mostrarResultado(datosAnteriores);
    } ,2000)
}
// Por ultimo, creamos la función mostrar Datos, cuyo parametro será los datos almacenados en procesarDatos
function mostrarResultado(datosProcesados){
    // Utilizamos un setTimeout para mostrar los datos
    setTimeout(() => {
        console.log(`RESULTADO FINAL`);
        console.log(`ID: ${datosProcesados.id} - Valor Original: ${datosProcesados.valor}`);
    }, 2000)
}
// Por ultimo, llamamos la función tomar datos y su argumento será la función procesar datos 
tomarDatos(procesarDatos)