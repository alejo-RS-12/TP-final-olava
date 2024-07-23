"use strict";
// Lista de productos fija con stock
const productos = [
    { nombre: "Queso en hebras Italiano La Paulina 135 Gr.", precio: 1.200, stock: 10 },
    { nombre: "Cerveza Lata Miller 473 Ml.", precio: 900, stock: 5 },
    { nombre: "Shampoo Pantene Restauración Pro-V Solutions 400 Ml.", precio: 2.840, stock: 8 },
    { nombre: "Ensalada Clásica Buy & Eat 200 Gr.", precio: 1.890, stock: 3 },
    { nombre: "Limón x 1 Kg.", precio: 590, stock: 54},
    { nombre: "Chorizo Fresco Dia Cerdo 400 Gr.", precio: 2.190, stock: 1 },
    { nombre: "Matambre Envasado al Vacío x 1 Kg", precio: 6.490, stock: 23 },
    { nombre: "Alfajor Triple Milka Oreo 61 Gr.", precio: 1.290, stock: 5},
];

// Función para cargar los productos en la página
function cargarProductos() {
    const listaProductos = document.getElementById('product-list');

    productos.forEach((producto, index) => {
        // Crear el contenedor del producto
        const productoItem = document.createElement('div');
        productoItem.classList.add('product-item');

        // Crear el nombre del producto
        const nombreProducto = document.createElement('span');
        nombreProducto.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)} (Stock: ${producto.stock})`;

        // Crear el input para la cantidad
        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min = '0';
        inputCantidad.max = producto.stock;
        inputCantidad.value = '0';
        inputCantidad.id = `cantidad-${index}`;

        // Agregar el nombre del producto y el input al contenedor del producto
        productoItem.appendChild(nombreProducto);
        productoItem.appendChild(inputCantidad);

        // Agregar el contenedor del producto a la lista de productos
        listaProductos.appendChild(productoItem);
    });
}

// Función para manejar la compra
function manejarCompra() {
    let total = 0;
    let error = false;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    productos.forEach((producto, index) => {
        const cantidad = parseInt(document.getElementById(`cantidad-${index}`).value);

        if (cantidad < 0 || cantidad > producto.stock) {
            error = true;
        } else {
            total += cantidad * producto.precio;
        }
    });

    if (error) {
        resultado.innerHTML = '<span id="error">Error:no hay estock suficiente, vuelva a ingresar otra cantidad.</span>';
    } else {
        resultado.textContent = `El total de su compra es: $${total.toFixed(2)}`;
    }
}

// Llamar a la función para cargar los productos cuando se cargue la página
document.addEventListener('DOMContentLoaded', cargarProductos);

// Añadir el event listener al botón comprar
document.getElementById('comprar').addEventListener('click', manejarCompra);
