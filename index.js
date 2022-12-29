document.addEventListener('DOMContentLoaded', () => {
    pintarEntradas();

    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
        actualizarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    }
})