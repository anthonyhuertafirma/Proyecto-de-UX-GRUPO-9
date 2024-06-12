const cartItems = [
  {
    urlImagen: 'images/dish-1.png',
    nombre: 'Plato 1',
    descripcion: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    nombreRestaurante: 'Tienda: Cafetería De La Facultad De Letras'
  },
  {
    urlImagen: 'images/dish-2.png',
    nombre: 'Plato 2',
    descripcion: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.',
    nombreRestaurante: 'Tienda: Cafetería De La Clínica Universitaria'
  }
];

let carritoContainer = document.getElementById('cart-items');

async function recuperarItems() {
  let carritoItems = recuperarItemsCarrito();
  console.log(carritoItems);
  const response = await fetch('http://localhost:8080/api/carrito', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(carritoItems)
  });

  const responseData = await response.json();

  responseData.forEach((item) => {
    carritoContainer.appendChild(createCartItem(item))
  })
}

recuperarItems().then(r => console.log(r));


// Función para crear un ítem del carrito
function createCartItem(itemData) {
  let cartItem = document.createElement('div');
  cartItem.className = 'cart-item';

  let img = document.createElement('img');
  img.src = itemData.urlImagen;
  img.alt = itemData.nombre;

  let itemInfo = document.createElement('div');
  itemInfo.className = 'item-info';

  let h3 = document.createElement('h3');
  h3.textContent = itemData.nombre;

  let p = document.createElement('p');
  p.textContent = itemData.descripcion;

  let span = document.createElement('span');
  span.textContent = itemData.nombreRestaurante;

  itemInfo.appendChild(h3);
  itemInfo.appendChild(p);
  itemInfo.appendChild(span);

  let itemControls = document.createElement('div');
  itemControls.className = 'item-controls';

  let input = document.createElement('input');
  input.type = 'number';
  input.value = '1';
  input.min = '1';

  let button = document.createElement('button');
  button.className = 'fas fa-trash-alt';

  itemControls.appendChild(input);
  itemControls.appendChild(button);

  cartItem.appendChild(img);
  cartItem.appendChild(itemInfo);
  cartItem.appendChild(itemControls);

  return cartItem;
}

