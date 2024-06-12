function guardarItemCarrito(id, arr) {
  arr.push(id);
  sessionStorage.setItem("carrito", JSON.stringify(arr));
}

function recuperarItemsCarrito() {
  let arrayJson = sessionStorage.getItem("carrito");

  return arrayJson ? JSON.parse(arrayJson) : [];
}