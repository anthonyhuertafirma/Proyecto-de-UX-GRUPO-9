const cartItems = {};

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

    let totalPrecio = 0;

    responseData.forEach((itemData) => {
        carritoContainer.appendChild(createCartItem(itemData))
        totalPrecio += itemData.precio;
    })

    actualizarResumen(totalPrecio);
    localStorage.setItem('carrito', JSON.stringify(responseData));
}

recuperarItems().then(r => console.log(r));

// Función para crear un ítem del carrito
function createCartItem(itemData) {
    let cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.id = itemData.id;

    let img = document.createElement('img');
    img.src = itemData.urlImagen;
    img.alt = itemData.nombre;

    let itemInfo = document.createElement('div');
    itemInfo.className = 'item-info';

    let h3 = document.createElement('h3');
    h3.textContent = itemData.nombre;

    let p = document.createElement('p');
    p.textContent = itemData.descripcion;

    let spanPrecio = document.createElement('span');
    spanPrecio.textContent = `S/. ${itemData.precio}`;
    spanPrecio.style.color = 'green';
    spanPrecio.style.fontWeight = 'bold';
    spanPrecio.style.fontSize = '1.2em'; // Tamaño más grande que el texto normal

    itemInfo.appendChild(h3);
    itemInfo.appendChild(p);
    itemInfo.appendChild(spanPrecio);

    let itemControls = document.createElement('div');
    itemControls.className = 'item-controls';

    let input = document.createElement('input');
    input.type = 'number';
    input.value = '1';
    input.min = '0'; // Permitir cantidad mínima de 0
    input.addEventListener('change', (event) => {
        actualizarResumenConCantidad(itemData, event.target.value);
        if (event.target.value <= 0) {
            eliminarElementoDelCarrito(cartItem, itemData);
        }
    });


    itemControls.appendChild(input);

    cartItem.appendChild(img);
    cartItem.appendChild(itemInfo);
    cartItem.appendChild(itemControls);

    return cartItem;
}

function actualizarResumen(totalPrecio) {
    const productCostElement = document.getElementById('product-cost');
    const shippingCostElement = document.getElementById('shipping-cost');
    const totalCostElement = document.getElementById('total-cost');

    productCostElement.textContent = `S/. ${totalPrecio.toFixed(2)}`;
    const shippingCost = parseFloat(shippingCostElement.textContent.replace('S/. ', ''));
    const totalCost = totalPrecio + shippingCost;
    totalCostElement.textContent = `S/. ${totalCost.toFixed(2)}`;
}

function actualizarResumenConCantidad(itemData, cantidad) {
    const carritoItems = Array.from(document.getElementsByClassName('cart-item'));
    let totalPrecio = 0;
    carritoItems.forEach((cartItem) => {
        const input = cartItem.querySelector('input[type="number"]');
        const itemPrice = parseFloat(itemData.precio);
        totalPrecio += itemPrice * parseFloat(input.value);
    });
    actualizarResumen(totalPrecio);

    //LocalStorage
    const updatedCarrito = carritoItems.map((cartItem) => {
        const input = cartItem.querySelector('input[type="number"]');
        return {
            id: cartItem.id,
            nombre: cartItem.querySelector('h3').textContent,
            descripcion: cartItem.querySelector('p').textContent,
            nombreRestaurante: cartItem.querySelector('span').textContent,
            precio: itemData.precio,
            cantidad: input.value,
        };
    });
    localStorage.setItem('carrito', JSON.stringify(updatedCarrito));
}

function eliminarElementoDelCarrito(cartItem, itemData) {
    // Eliminar elemento del DOM
    carritoContainer.removeChild(cartItem);

    // Actualizar almacenamiento local eliminando el elemento
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(item => item.id !== itemData.id);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar resumen
    let totalPrecio = parseFloat(document.getElementById('product-cost').textContent.replace('S/.', ''));
    const itemPrice = parseFloat(itemData.precio.replace('S/', ''));
    totalPrecio -= itemPrice;
    actualizarResumen(totalPrecio);
}