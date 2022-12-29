const pintarEntrada = () => {
    const container = document.getElementById("entrada-container");
  
    entradas.forEach(entrada => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `<div class="card-image">
                          <img src=${entrada.img}>
                          <span class="card-title">${entrada.nombre}</span>
                          <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id=${entrada.id} class="material-icons agregar">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${entrada.desc}</p>
                            <p>Tipo: ${entrada.tipo}</p>
                            <p>${entrada.precio}</p>
                        </div>
                       `
      container.appendChild(div);
    });
  };