// Mensaje Inicial
console.log("----- 1. VERSIÓN CON CALLBACKS (BÁSICA) -----");
console.log("Flujo: 1s (Buscar) -> 2s (Permisos) -> 1s (Reporte).");

// Función 1: Buscar Usuario (1 segundo)
function buscarUsuario(id, callback) {
    console.log(`\n[Paso 1] Buscando usuario ID: ${id}...`);
    setTimeout(() => {
        const usuario = { id: id, nombre: "Alice" };
        callback(usuario); // Llamamos al callback con el resultado.
    }, 1000); // 1 segundo
}

// Función 2: Consultar Permisos (2 segundos)
function consultarPermisos(usuario, callback) {
    console.log(`[Paso 2] Consultando permisos para ${usuario.nombre}...`);
    setTimeout(() => {
        const permisos = { nivel: 'Admin' };
        callback(usuario, permisos); // Llamamos al callback con ambos datos.
    }, 2000); // 2 segundos
}

// Función 3: Generar Reporte (1 segundo)
function generarReporte(usuario, permisos, callback) {
    console.log(`[Paso 3] Generando reporte final...`);
    setTimeout(() => {
        const reporte = `Reporte para ${usuario.nombre} con permisos: ${permisos.nivel}.`;
        callback(reporte); // Llamamos al callback con el reporte final.
    }, 1000); // 1 segundo
}

// Inicio del flujo de anidación.
buscarUsuario(42, (usuarioEncontrado) => {
    // Si la búsqueda termina, pasamos al paso 2.
    consultarPermisos(usuarioEncontrado, (user, permisosObtenidos) => {
        // Si los permisos terminan, pasamos al paso 3.
        generarReporte(user, permisosObtenidos, (reporteFinal) => {
            // Fin del proceso.
            console.log("\n✅ PROCESO COMPLETADO POR CALLBACKS:");
            console.log(reporteFinal);
        });
    });
});