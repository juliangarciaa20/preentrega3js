let carrito = [];

const entradacontainer = document.getElementById('entrada-container');

entradacontainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('agregar')) {
        validarEntradaEnCarrito(e.target.id)
    }
});

const validarEntradaEnCarrito = (entradaId) => {
    const entradaRepetido = carrito.find(entrada => entrada.id == entradaId);

    if (!entradaRepetido) {
        const entrada = entradas.find(entrada => entrada.id == entradaId);
        carrito.push(entrada);
        pintarEntradaCarrito(entrada);
        actualizarTotalesCarrito(carrito);
    } else {
        entradaRepetido.cantidad++
        const cantidadentrada = document.getElementById(`cantidad${entradaRepetido.id}`);
        cantidadentrada.innerText = `Cantidad: ${entradaRepetido.cantidad}`;
        actualizarTotalesCarrito(carrito);
    }
};

const pintarEntradaCarrito = (entrada) => {
    const container = document.getElementById('carrito-container');
    const div = document.createElement('div');
    div.classList.add('entradaEnCarrito');
    div.innerHTML =`
        <p>${entrada.nombre}</p>
        <p>Precio: $${entrada.precio}</p>
        <p id=cantidad${entrada.id}>Cantidad: ${entrada.cantidad}</p>
        <button class="btn waves-effect waves-ligth boton-eliminar" value="${entrada.id}">X</button>
    `
    container.appendChild(div);
};

const actualizarTotalesCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const totalCompra = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    pintarTotalesCarrito(totalCantidad, totalCompra);
    guardarCarritoStorage(carrito);
};

const pintarTotalesCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById('contador-carrito');
    const precioTotal = document.getElementById('precioTotal');

    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText = totalCompra;
};

const eliminarentradaEnCarrito = (entradaId) => {
    const entradaIndex = carrito.findIndex(entrada => entrada.id == entradaId);
    carrito.splice(entradaIndex, 1);
    actualizarCarrito(carrito);
    actualizarTotalesCarrito(carrito);
};

const actualizarCarrito = (carrito) => {
    const container = document.getElementById('carrito-container');

    container.innerHTML = '';

    carrito.forEach(entrada => {
        const div = document.createElement('div');
        div.classList.add('entradaEnCarrito');
        div.innerHTML =`
            <p>${entrada.nombre}</p>
            <p>Precio: $${entrada.precio}</p>
            <p id=cantidad${entrada.id}>Cantidad: ${entrada.cantidad}</p>
            <button class="btn waves-effect waves-ligth boton-eliminar" value="${entrada.id}">X</button>
        `
        container.appendChild(div);
    });
};

const guardarCarritoStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
};