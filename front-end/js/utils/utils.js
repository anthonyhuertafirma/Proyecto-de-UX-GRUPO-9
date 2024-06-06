function guardarItemCarrito(id, arr) {
  arr.push(id);
  let arrayJson = JSON.stringify(arr);

  sessionStorage.setItem("carrito", JSON.stringify(arrayJson));
}

function recuperarItemsCarrito() {
  let arrayJson = sessionStorage.getItem("carrito");
  return JSON.parse(arrayJson);
}