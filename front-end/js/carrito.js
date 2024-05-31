const cartItems = [
  {
    imgSrc: 'images/dish-1.png',
    imgAlt: 'Plato 1',
    h3: 'Plato 1',
    p: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    span: 'Tienda: Cafetería De La Facultad De Letras'
  },
  {
    imgSrc: 'images/dish-2.png',
    imgAlt: 'Plato 2',
    h3: 'Plato 2',
    p: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.',
    span: 'Tienda: Cafetería De La Clínica Universitaria'
  }
];

let carritoContainer = document.getElementById('cart-items');

// Función para crear un ítem del carrito
function createCartItem(itemData) {
  let cartItem = document.createElement('div');
  cartItem.className = 'cart-item';

  let img = document.createElement('img');
  img.src = itemData.imgSrc;
  img.alt = itemData.imgAlt;

  let itemInfo = document.createElement('div');
  itemInfo.className = 'item-info';

  let h3 = document.createElement('h3');
  h3.textContent = itemData.h3;

  let p = document.createElement('p');
  p.textContent = itemData.p;

  let span = document.createElement('span');
  span.textContent = itemData.span;

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

// Añadir cada ítem del carrito al contenedor principal
cartItems.forEach(function(item) {
  carritoContainer.appendChild(createCartItem(item));
});
