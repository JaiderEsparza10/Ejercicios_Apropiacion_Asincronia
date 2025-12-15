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
console.log("=========================================");
console.log("----- 1. VERSIÓN CON CALLBACKS (ORDEN 1) -----");

// --- Funciones Base con Callbacks ---

function verificarOrden(orden, callback) {
    console.log(`[CB - ${getTiempoRelativo().toFixed(3)}s] 1. Iniciando Verificación (ID: ${orden.id})...`);
    setTimeout(() => {
        orden.verificada = true;
        console.log(`[CB - ${getTiempoRelativo().toFixed(3)}s] 1. Verificación OK.`);
        callback(orden);
    }, TIEMPOS.VERIFICACION);
}

function procesarOrden(orden, callback) {
    console.log(`[CB - ${getTiempoRelativo().toFixed(3)}s] 2. Iniciando Procesamiento (ID: ${orden.id})...`);
    setTimeout(() => {
        orden.procesada = true;
        console.log(`[CB - ${getTiempoRelativo().toFixed(3)}s] 2. Procesamiento OK.`);
        callback(orden);
    }, TIEMPOS.PROCESAMIENTO);
}

function registrarOrden(orden, callback) {
    console.log(`[CB - ${getTiempoRelativo().toFixed(3)}s] 3. Iniciando Registro (ID: ${orden.id})...`);
    setTimeout(() => {
        orden.registrada = true;
        console.log(`[CB - ${getTiempoRelativo().toFixed(3)}s] 3. Registro OK.`);
        callback(orden);
    }, TIEMPOS.REGISTRO);
}

function notificarCliente(orden, callback) {
    console.log(`[CB - ${getTiempoRelativo().toFixed(3)}s] 4. Iniciando Notificación (ID: ${orden.id})...`);
    setTimeout(() => {
        orden.notificada = true;
        console.log(`[CB - ${getTiempoRelativo().toFixed(3)}s] 4. Notificación OK.`);
        callback(orden);
    }, TIEMPOS.NOTIFICACION);
}

// --- Ejecución del Flujo (Callback Hell) ---
const orden1 = { ...ordenes[0] }; // Copia de la orden
const inicioCallback = Date.now();

verificarOrden(orden1, (ordenVerificada) => {
    // -> Nivel de anidación 1
    procesarOrden(ordenVerificada, (ordenProcesada) => {
        // -> Nivel de anidación 2
        registrarOrden(ordenProcesada, (ordenRegistrada) => {
            // -> Nivel de anidación 3
            notificarCliente(ordenRegistrada, (ordenFinal) => {
                // -> Nivel de anidación 4
                const duracion = (Date.now() - inicioCallback) / 1000;
                console.log("\nPROCESO DE CALLBACKS FINALIZADO.");
                console.log(`Duración total de Orden ${ordenFinal.id}: ${duracion} segundos.`);
            });
        });
    });
});
// Tiempo teórico total: 1500 + 2000 + 1000 + 500 = 5000 ms (5 segundos).