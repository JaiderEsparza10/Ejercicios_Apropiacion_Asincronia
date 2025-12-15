const usuarios = [101, 102, 103, 104];

const TIEMPOS = {
    USUARIO: 1200,   // 12 segundos
    SEGURIDAD: 800,  // 08 segundos
    ROLES: 2000,     // 20 segundos
    REGISTRO: 600    // 06 segundos
};

const inicioTotal = Date.now();
let reporteFinal = [];

// Función auxiliar para obtener la marca de tiempo relativa en segundos
function getTiempoRelativo() {
    return (Date.now() - inicioTotal) / 1000;
}

// Tiempo teorico de un solo flujo secuencial 1200 + 800 + 2000 + 600 = 4600 ms o 46 segundos

// Mensaje Inicial
setTimeout(() => { // Esperamos que la parte de Promesas termine
    console.log("\n\n=========================================");
    console.log("----- 3 VERSIÓN FINAL CON ASYNC AWAIT -----");

    // --- Flujo Secuencial por Usuario (Async/Await) ---

    async function procesarUsuarioAsync(id) {
        const inicioUsuario = Date.now();
        
        // La secuencia es clara gracias a await
        const dataUsuario = await consultaUsuario(id);
        const dataSeguridad = await consultaSeguridad(dataUsuario);
        const dataRoles = await consultaRoles(dataSeguridad);
        const dataFinal = await registroFinal(dataRoles);

        const tiempoTotal = (Date.now() - inicioUsuario) / 1000;
        
        const resultado = {
            id: dataFinal.id,
            nombre: dataFinal.nombre,
            seguridad: dataFinal.seguridad,
            roles: dataFinal.roles,
            tiempoTotal: `${tiempoTotal} segundos`
        };
        
        reporteFinal.push({ ...resultado, modo: "AsyncAwait" });
        console.log(`[A/A - ${getTiempoRelativo()}s] Usuario ${dataFinal.id} PROCESO TERMINADO`);
        return resultado;
    }

    // --- Ejecución Paralela entre Usuarios (Promiseall) ---
    async function ejecutarAsyncAwait() {
        // Reiniciamos el reporte para la segunda ejecución de usuarios
        reporteFinal = reporteFinal.filter(r => r.modo === "Promesas");
        
        const promesasUsuarios = usuarios.map(id => procesarUsuarioAsync(id));
        
        console.log("Iniciando procesamiento de los 4 usuarios en paralelo con AsyncAwait...");
        
        const resultados = await Promise.all(promesasUsuarios);

        const tiempoGrupo = (Date.now() - inicioTotal) / 1000;
        console.log("\nVERSIÓN ASYNC AWAIT TERMINADA");
        console.log("Usuarios consultados en paralelo 4");
        console.log(`Tiempo total del grupo ${tiempoGrupo} segundos`);
        
        // Análisis Final
        console.log("\nANÁLISIS DE CUELLOS DE BOTELLA Y TIEMPOS");
        console.log("El cuello de botella es la Consulta de Roles 2000 ms");
        console.log("El tiempo total del grupo es 46 segundos aproximadamente porque todas las órdenes inician a la vez y el proceso mas lento 2000 ms determina el tiempo total");
        console.log("El tiempo de ejecución con Promesas y AsyncAwait es prácticamente idéntico porque ambos usan Promiseall para el paralelismo");
        
        // Reporte Final
        console.log("\n=== REPORTE FINAL DE RESULTADOS ===");
        console.table(reporteFinal);
        console.log("-----------------------------------------");
    }

    ejecutarAsyncAwait();
}, 8000); // Retraso suficiente para que la parte de Promesas termine