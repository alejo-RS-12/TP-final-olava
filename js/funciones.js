"use strict";
//se define un arreglo de objetos con productos
const productos = [
    { nombre: "Queso en hebras Italiano La Paulina 135 Gr.", precio: 1200, stock: 10, imagen: "img/queso.png", clase: "queso" },
    { nombre: "Cerveza Lata Miller 473 Ml.", precio: 900, stock: 5, imagen: "img/cerveza-rubia.png", clase: "cerveza-rubia" },
    { nombre: "Shampoo Pantene Restauración Pro-V Solutions 400 Ml.", precio: 2840, stock: 8, imagen: "img/shampoo.png", clase: "shampoo" },
    { nombre: "Ensalada Clásica Buy & Eat 200 Gr.", precio: 1890, stock: 3, imagen: "img/verduras.png", clase: "verduras"  },
    { nombre: "Limón x 1 Kg.", precio: 590, stock: 54, imagen: "img/limones.png", clase: "limones" },
    { nombre: "Chorizo Fresco Dia Cerdo 400 Gr.", precio: 2190, stock: 1, imagen: "img/chorizo.png", clase: "chorizo" },
    { nombre: "Matambre Envasado al Vacío x 1 Kg", precio: 6490, stock: 23, imagen:"img/carne.png", clase: "carne" },
    { nombre: "Alfajor Triple Milka Oreo 61 Gr.", precio: 1290, stock: 5, imagen: "img/alfajor.png", clase: "alfajor" },
];

// Función para cargar los productos en la página
function cargarProductos() {
    const listaProductos = document.getElementById('product-list');// se declara una constante donde se mostraran los productos

    productos.forEach((producto, index) => {// recorre el arreglo de productos y para cada producto
        // Crear el contenedor del producto
        const productoItem = document.createElement('div');
        productoItem.classList.add('product-item', producto.clase);

        // Crear la imagen del producto
        const imagenProducto = document.createElement('img');
        imagenProducto.src = producto.imagen;
        imagenProducto.alt = producto.nombre;
        imagenProducto.classList.add('imagen-producto');

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

        // Agregar la imagen, el nombre del producto y el input al contenedor del producto
        productoItem.appendChild(imagenProducto);
        productoItem.appendChild(nombreProducto);
        productoItem.appendChild(inputCantidad);

        // Agregar el contenedor del producto a la lista de productos
        listaProductos.appendChild(productoItem);
    });
}

// Función para manejar la compra
function manejarCompra() {
    let total = 0; // se inicializa en 0 para almacenar el total de la compra
    let error = false; // variable para manejar errores
    const resultado = document.getElementById('resultado');// se obtiene el id en el que se mostrara el resultado de la compra
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    productos.forEach((producto, index) => {
        const cantidad = parseInt(document.getElementById(`cantidad-${index}`).value);// se obtiene la cantidad ingresada por el usuario

        if (cantidad < 0 || cantidad > producto.stock) {
            error = true;
        } else {
            total += cantidad * producto.precio;
        }
    });// se verifica si al cantidad es menor que 0 y si supera el stock, entonces da un mensaje de erro, sino prosigue con la funcion

    if (error) {
        resultado.innerHTML = '<span id="error">Error: stock agotado, porfavor eliga otra cantidad.</span>';
    } else {
        resultado.textContent = `El total de su compra es: $${total.toFixed(2)}`;
    }
}

// Llamar a la función para cargar los productos cuando se cargue la página
document.addEventListener('DOMContentLoaded', cargarProductos);

// Añadir el event listener al botón comprar
document.getElementById('comprar').addEventListener('click', manejarCompra);

