export function getProductos() {
    return fetch('/data/productos.json')
        .then((respuesta) => respuesta.json())
}