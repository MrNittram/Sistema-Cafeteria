# ☕ CaféSahur

## Descripción

CaféSahur es una aplicación web de cafetería desarrollada con React y Vite.

La aplicación permite explorar un menú de productos, buscar productos, consultar sus detalles y crear un pedido mediante un carrito de compras.

El proyecto cuenta con un diseño responsive para adaptarse a computadores, tablets y dispositivos móviles.

## Funcionalidades

- Visualización de productos.
- Buscador de productos.
- Filtrado de productos por nombre.
- Visualización del detalle de cada producto.
- Agregar productos al carrito.
- Aumentar la cantidad de productos.
- Disminuir la cantidad de productos.
- Eliminar productos del carrito.
- Contador de productos en el carrito.
- Persistencia del carrito mediante `localStorage`.
- Confirmación del pedido.
- Diseño responsive.
- Carga de productos mediante una API simulada.
- Manejo de estados de carga y errores.

## Instrucciones de uso

### 1. Ingresar al sitio

Al ingresar a CaféSahur se muestra la página principal junto con el menú de productos disponibles.

### 2. Explorar productos

El usuario puede recorrer los productos disponibles y revisar su nombre, descripción, categoría, precio e imagen.

### 3. Buscar un producto

El usuario puede utilizar el buscador para encontrar un producto escribiendo su nombre.

### 4. Ver el detalle de un producto

Al seleccionar un producto se abre una ventana con información detallada del producto.

### 5. Agregar un producto al carrito

Dentro del detalle del producto se puede presionar el botón "Agregar al carrito".

El producto será agregado al carrito de compras.

### 6. Administrar el carrito

Desde el carrito el usuario puede:

- Aumentar la cantidad de un producto.
- Disminuir la cantidad de un producto.
- Eliminar un producto.
- Revisar los productos agregados al pedido.

El carrito se guarda en `localStorage`, por lo que sus productos permanecen almacenados al recargar la página.

### 7. Confirmar el pedido

Cuando el usuario termine de seleccionar sus productos puede presionar "Confirmar pedido".

La aplicación mostrará un mensaje indicando que el pedido fue realizado correctamente y posteriormente vaciará el carrito.

## Instalación

Para ejecutar el proyecto de manera local se deben instalar primero las dependencias.

```bash
npm install
