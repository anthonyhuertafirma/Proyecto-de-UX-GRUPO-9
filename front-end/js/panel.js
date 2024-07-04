document.addEventListener('DOMContentLoaded', () => {
    const selectPlato = document.getElementById('select-plato');
    const imgPlato = document.getElementById('img-plato');
    const imagenPlatoFile = document.getElementById('imagen-plato-file');
    const nombrePlato = document.getElementById('nombre-plato');
    const precioPlato = document.getElementById('precio-plato');
    const cantidadPlato = document.getElementById('cantidad-plato');
    const descripcionPlato = document.getElementById('descripcion-plato');
    const actualizarPlatoBtn = document.getElementById('actualizar-plato');
    const eliminarPlatoBtn = document.getElementById('eliminar-plato');
    const añadirPlatoBtn = document.getElementById('añadir-plato');
    const limpiarFormularioBtn = document.getElementById('limpiar-formulario');

    const imgNuevo = document.getElementById('img-nuevo');
    const imagenNuevoFile = document.getElementById('imagen-nuevo-file');
    const nombreNuevo = document.getElementById('nombre-nuevo');
    const precioNuevo = document.getElementById('precio-nuevo');
    const cantidadNuevo = document.getElementById('cantidad-nuevo');
    const descripcionNuevo = document.getElementById('descripcion-nuevo');

    let productos = [];

    async function fetchProductos() {
        const response = await fetch('http://localhost:8080/api/productos');
        productos = await response.json();
        populateSelectOptions();
    }

    function populateSelectOptions() {
        selectPlato.innerHTML = ''; // Clear existing options
        productos.forEach((producto) => {
            const option = document.createElement('option');
            option.value = producto.id;
            option.textContent = producto.nombre;
            selectPlato.appendChild(option);
        });
        updateFormFields();
    }

    function updateFormFields() {
        const selectedId = selectPlato.value;
        const selectedProduct = productos.find(product => product.id == selectedId);
        if (selectedProduct) {
            imgPlato.src = selectedProduct.urlImagen;
            nombrePlato.value = selectedProduct.nombre;
            precioPlato.value = selectedProduct.precio;
            cantidadPlato.value = selectedProduct.cantidad;
            descripcionPlato.value = selectedProduct.descripcion;
        }
    }

    function readImageFile(input, imgElement) {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imgElement.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    selectPlato.addEventListener('change', updateFormFields);
    imagenPlatoFile.addEventListener('change', () => readImageFile(imagenPlatoFile, imgPlato));
    imagenNuevoFile.addEventListener('change', () => readImageFile(imagenNuevoFile, imgNuevo));

    actualizarPlatoBtn.addEventListener('click', async (event) => {
        event.preventDefault();
        if (confirm('¿Estás seguro de que deseas actualizar este producto?')) {
            const selectedId = selectPlato.value;

            const formData = {
                'id': selectPlato.value,
                'nombre': nombrePlato.value,
                'precio': precioPlato.value,
                'cantidad': cantidadPlato.value,
                'descripcion': descripcionPlato.value,
                'urlImagen': imgPlato.src,
            }

            if (imagenPlatoFile.files[0]) {
                formData['urlImagen'] = imagenPlatoFile.files[0];
            }

            console.log(formData);

            const response = await fetch(`http://localhost:8080/api/productos/${selectedId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Producto actualizado correctamente');
                await fetchProductos();
            } else {
                alert('Error al actualizar producto');
            }
        }
    });

    eliminarPlatoBtn.addEventListener('click', async (event) => {
        event.preventDefault();
        if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
            const selectedId = selectPlato.value;
            const response = await fetch(`http://localhost:8080/api/productos/${selectedId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('Producto eliminado correctamente');
                await fetchProductos();
            } else {
                alert('Error al eliminar producto');
            }
        }
    });

    añadirPlatoBtn.addEventListener('click', async (event) => {
        event.preventDefault();
        if (confirm('¿Estás seguro de que deseas añadir este producto?')) {
            const formData = {
                'nombre': nombrePlato.value,
                'precio': precioPlato.value,
                'cantidad': cantidadPlato.value,
                'descripcion': descripcionPlato.value,
                'urlImagen': ''
            }

            if (imagenNuevoFile.files[0]) {
                formData['urlImagen'] = imagenNuevoFile.files[0];
            }

            console.log(formData);

            const response = await fetch('http://localhost:8080/api/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Producto añadido correctamente');
                await fetchProductos();
            } else {
                alert('Error al añadir producto');
            }
        }
    });

    limpiarFormularioBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if (confirm('¿Estás seguro de que deseas limpiar el formulario?')) {
            imgNuevo.src = 'images/dish-2.png';
            nombreNuevo.value = '';
            precioNuevo.value = '';
            cantidadNuevo.value = '';
            descripcionNuevo.value = '';
        }
    });

    fetchProductos();
});
