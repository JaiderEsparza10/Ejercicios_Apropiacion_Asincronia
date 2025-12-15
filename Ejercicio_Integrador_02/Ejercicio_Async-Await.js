const ordenes = [
    { id: 1, cliente: "Ana", monto: 120000 },
    { id: 2, cliente: "Luis", monto: 80000 },
    { id: 3, cliente: "María", monto: 150000 }
];

const TIEMPOS = {
    VERIFICACION: 1500,  // 1.5 segundos
    PROCESAMIENTO: 2000, // 2.0 segundos
    REGISTRO: 1000,      // 1.0 segundos
    NOTIFICACION: 500    // 0.5 segundos
};

const inicioTotal = Date.now();
let reporteFinal = [];

// Función auxiliar para obtener la marca de tiempo relativa
function getTiempoRelativo() {
    return (Date.now() - inicioTotal) / 1000;
}

// Mensaje Inicial
console.log("\n\n=========================================");
console.log("----- 3A. VERSIÓN ASYNC/AWAIT: SERIE -----");

async function procesarOrdenSecuencial(orden) {
    const inicioOrden = Date.now();
    
    // El 'await' garantiza que cada paso se ejecute estrictamente en orden.
    const ordenVerificada = await verificarOrdenP(orden);
    const ordenProcesada = await procesarOrdenP(ordenVerificada);
    const ordenRegistrada = await registrarOrdenP(ordenProcesada);
    const ordenFinal = await notificarClienteP(ordenRegistrada);

    const duracion = (Date.now() - inicioOrden) / 1000;
    reporteFinal.push({ id: ordenFinal.id, duracion: duracion.toFixed(3), modo: 'Serie' });
}

async function ejecutarSerie() {
    const inicioSerie = Date.now();
    // Bucle que usa 'await' para procesar cada orden una tras otra
    for (const orden of ordenes) {
        await procesarOrdenSecuencial({ ...orden });
    }

    const totalSerie = (Date.now() - inicioSerie) / 1000;
    console.log("\n✅ PROCESAMIENTO EN SERIE FINALIZADO.");
    console.log(`Duración total de la SERIE: ${totalSerie.toFixed(3)} segundos.`);
    console.log("ANÁLISIS: La ejecución en serie suma los tiempos. Es simple de leer y garantiza el orden.");
    console.log("-----------------------------------------");
}

ejecutarSerie();