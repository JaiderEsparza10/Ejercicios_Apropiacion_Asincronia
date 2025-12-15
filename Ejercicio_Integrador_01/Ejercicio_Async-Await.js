// Mensaje Inicial
console.log("\n\n----- 3. VERSIÓN CON ASYNC/AWAIT  -----");
console.log("Flujo: 1s (Buscar) -> 2s (Permisos) -> 1s (Reporte).");

// Reutilizamos las funciones basadas en Promesas (P) de la sección anterior.

// Creamos la función principal y la marcamos como 'async'.
async function ejecutarConsultaUsuario() {
    // 1. Await pausa la ejecución hasta que se obtiene el usuario (1s).
    console.log("\nPaso 1 Esperando usuario...");
    const usuario = await buscarUsuarioP(202);

    // 2. Await pausa la ejecución hasta que se obtienen los permisos (2s).
    console.log("Paso 2 Esperando permisos...");
    const data = await consultarPermisosP(usuario);

    // 3. Await pausa la ejecución hasta que se genera el reporte (1s).
    console.log("Paso 3 Esperando reporte...");
    const reporteFinal = await generarReporteP(data);

    // 4. Muestra el resultado.
    console.log("\nPROCESO COMPLETADO POR ASYNC/AWAIT:");
    console.log(reporteFinal);
}

// Ejecutamos la función asíncrona.
ejecutarConsultaUsuario();