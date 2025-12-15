// Mensaje Inicial
console.log("\n\n----- 2. VERSIÓN CON PROMESAS -----");
console.log("Flujo: 1s (Buscar) -> 2s (Permisos) -> 1s (Reporte).");

// Función 1 (Promesa): Buscar Usuario (1 segundo)
function buscarUsuarioP(id) {
    console.log(`\n[Paso 1] Buscando usuario ID: ${id}...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            const usuario = { id: id, nombre: "Bob" };
            resolve(usuario); // Resolvemos la Promesa con el resultado.
        }, 1000); // 1 segundo
    });
}

// Función 2 (Promesa): Consultar Permisos (2 segundos)
function consultarPermisosP(usuario) {
    console.log(`[Paso 2] Consultando permisos para ${usuario.nombre}...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            const permisos = { nivel: 'Editor' };
            // Para el siguiente paso, resolvemos con un objeto que tiene ambos datos.
            resolve({ usuario: usuario, permisos: permisos });
        }, 2000); // 2 segundos
    });
}

// Función 3 (Promesa): Generar Reporte (1 segundo)
function generarReporteP(data) {
    console.log(`[Paso 3] Generando reporte final...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            const reporte = `Reporte para ${data.usuario.nombre} con permisos: ${data.permisos.nivel}.`;
            resolve(reporte); // Resolvemos la Promesa con el reporte final.
        }, 1000); // 1 segundo
    });
}
buscarUsuarioP(101)
    .then(usuario => consultarPermisosP(usuario)) // El resultado de P1 se pasa a P2.
    .then(data => generarReporteP(data))         // El resultado de P2 se pasa a P3.
    .then(reporteFinal => {                      // El resultado final se maneja aquí.
        console.log("\n✅ PROCESO COMPLETADO POR PROMESAS:");
        console.log(reporteFinal);
        console.log("-----------------------------------------");
    });