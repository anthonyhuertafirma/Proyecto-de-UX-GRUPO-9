const menuItems = {
  id: 1,
  urlImagen: 'images/menu-1.jpg',
  nombre: 'Pizza "All the meats"',
  descripcion: 'Pizza familiar con todas las carnes. Queso mozzarella, carne de res, pepperoni, salchicha de cerdo, tocino y jamón.',
  cantidad: 8,
  precio: 'S/12.99'
}

const boxContainer = document.getElementById('box-container');
let arr = []

async function getProductos() {
  const response = await fetch('http://localhost:8080/api/productos', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  const responseData = await response.json();

  responseData.forEach((item) => {
    boxContainer.appendChild(createBoxItem(item))
  })
}

getProductos().then()

function createBoxItem(menuItem) {
  const box = document.createElement('div');
  box.className = 'box';
  box.id = menuItem.id;

  const imageDiv = document.createElement('div');
  imageDiv.className = 'image';

  const img = document.createElement('img');
  img.src = menuItem.urlImagen;
  img.alt = menuItem.nombre;
  imageDiv.appendChild(img);

  const contentDiv = document.createElement('div');
  contentDiv.className = 'content';

  const h3 = document.createElement('h3');
  h3.textContent = menuItem.nombre;
  contentDiv.appendChild(h3);

  const pDescripcion = document.createElement('p');
  pDescripcion.innerHTML = `<b>Descripción: </b>${menuItem.descripcion}`;
  contentDiv.appendChild(pDescripcion);

  const pCantidad = document.createElement('p');
  pCantidad.innerHTML = `<b>Cantidad: </b>${menuItem.cantidad}`;
  contentDiv.appendChild(pCantidad);

  const botonCarrito = document.createElement('button');
  botonCarrito.href = '#';
  botonCarrito.className = 'btn';
  botonCarrito.addEventListener('click', () => {guardarItemCarrito(box.id, arr)})

  const i = document.createElement('i');
  i.className = 'fa-solid fa-cart-shopping';
  botonCarrito.appendChild(i);
  botonCarrito.textContent = ' Agregar al carrito';

  const botonEliminar = document.createElement('button');
  botonEliminar.href = '#';
  botonEliminar.className = 'btn eliminar';
  botonEliminar.addEventListener('click', () => {eliminarItemCarrito(menuItem.id)});
  botonEliminar.textContent = 'Eliminar';

  const span = document.createElement('span');
  span.className = 'price';
  span.textContent = `S/. ${menuItem.precio ? menuItem.precio : 'No disponible'}`;

  contentDiv.appendChild(botonCarrito);
  contentDiv.appendChild(botonEliminar);
  contentDiv.appendChild(span);
  box.appendChild(imageDiv);
  box.appendChild(contentDiv);

  return box
}

async function eliminarItemCarrito(id) {
  const response = await fetch(`http://localhost:8080/api/productos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    alert('Producto eliminado del carrito');
    document.getElementById(id).remove(); // Eliminar el producto del DOM
  } else {
    alert('Hubo un error al eliminar el producto del carrito');
  }
}
