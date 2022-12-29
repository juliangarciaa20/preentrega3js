const modalcontainer = document.querySelector('.modal-container');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');

abrirCarrito.addEventListener('click', () => {
    modalcontainer.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalcontainer.classList.toggle('modal-active')
});

modalcontainer.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('boton-eliminar')) {
        eliminarEntradaEnCarrito(e.target.value);
    }
})