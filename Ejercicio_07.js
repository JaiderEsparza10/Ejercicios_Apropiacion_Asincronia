// Mensaje Inicial
console.log("----- INICIANDO PROCESO CON ASYNC/AWAIT -----");
function esperarDosSegundos() {
    // Retornamos una nueva Promesa.
    return new Promise((resolve, reject) => {
        // Usamos setTimeout para simular el tiempo que toma el proceso
        setTimeout(() => {
            // Después de 2000 milisegundos (2 segundos), la Promesa se resuelve
            resolve("Promesa resuelta! Espera de 2 segundos completada");
        }, 2000); // 2 segundos
    });
}

// Creamos una función asíncrona. La palabra clave 'async' permite
// usar 'await' dentro de esta función
async function ejecutarEspera() {
    // Mensaje que indica que el proceso principal ha comenzado
    console.log("1. La función async ha comenzado.");

    // La palabra clave 'await' hace que la ejecución de ejecutarEspera se pause aquí
    console.log("2. Llamando a la promesa y esperando el resultado");

    // Declaramos una variable para almacenar el resultado de la Promesa
    const resultado = await esperarDosSegundos();

    // Este código solo se ejecuta una vez que la Promesa se ha resuelto
    console.log("3. La promesa se ha resuelto y el 'await' ha finalizado");

    // Mostramos el resultado obtenido de la Promesa
    console.log(`4. Resultado Final: ${resultado}`);
}

// Ahora llamamos a la función asíncrona para iniciar todo el proceso
ejecutarEspera();

// Este mensaje se imprime INMEDIATAMENTE después de llamar a ejecutarEspera
// lo que demuestra que el hilo principal NO está bloqueado por el await
console.log("\n----- Hilo principal sigue ejecutándose sin ser bloqueado. -----");