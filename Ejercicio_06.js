// Mensaje Inicial
console.log("----- INICIANDO PROCESO ASÍNCRONO CON PROMESA -----");
// Creamos una función la cual retorna una nueva Promesa
// Este es el mecanismo moderno de JS para manejar procesos asíncronos
function procesoQuePuedeFallar() {
    // Retornamos una nueva Promesa 
    return new Promise((resolve, reject) => {
        // Generamos un número aleatorio entre 0 y 1
        const esExitoso = Math.random() < 0.5;

        // Luego el setTimeout para el tiempo.
        setTimeout(() => {
            // Una condición para determinar nuestro resultado
            if (esExitoso) {
                // Si la condición es TRUE, llamamos a resolve
                // Retornamos el valor de éxito
                resolve("Proceso completado con éxito");
            } else {
                // Si la condición es FALSE, llamamos a reject
                // Retornamos un objeto Error
                reject(new Error("El proceso ha fallado"));
            }
        }, 1000); // 1 segundo de retraso
    });
}

// Ahora llamamos a la función 'procesoQuePuedeFallar' para iniciar la Promesa
console.log("Iniciando el proceso...");

procesoQuePuedeFallar()
    // El método .then() se ejecuta si la Promesa llama a resolve
    // Su argumento 'resultado' recibe el valor que se le pasó a resolve
    .then((resultado) => {
        // Luego mostramos el valor retornado en caso de exito
        console.log("Resultado del .then():");
        console.log(resultado);
    })
    // El método .catch() se ejecuta si la Promesa llama a reject
    // Su argumento 'error' recibe el objeto Error que se le pasó a reject
    // Esto es el manejo de errores requerido
    .catch((error) => {
        // Luego mostramos el valor retornado en caso de fallo
        console.error("Resultado del .catch() - ¡Error atrapado!:");
        console.error(error.message);
    })
    // El método .finally() siempre se ejecuta, sin importar si fue resolve o reject
    .finally(() => {
        // Mostramos el mensaje de que el ciclo asíncrono termino
        console.log("\nProceso finalizado (con éxito o con error).");
    });