// Mensaje Inicial
console.log("----- ESTADO DEL PEDIDO -----");
// Creamos una función la cual tendra como parametro
// callback la cual nos permitirá mas adelante enviar 
// el valor
function Pedido(callback){
    // Declaramos una variable
    let pedidoAceptado;
    // Luego el setTimeout para el tiempo
    setTimeout(() => {
        // Una condición para nuestro mensaje
        if (pedidoAceptado == true){
            // Retornamos el valor 
            return callback("Pedido Entregado");
        }
        else {
            return callback("Pedido Cancelado")
        }
    }, 3000)
}
// Ahora llamamos a la función y como argumento crearemos una funcion
// la cual sera una ArrowFunction que tendra como argumento, proceso, la cual será el resultado
// del callback
Pedido((proceso) =>{
    // Luego mostramos el valor retornado
    console.log(`Estado del pedido: ${proceso}`);
    
})