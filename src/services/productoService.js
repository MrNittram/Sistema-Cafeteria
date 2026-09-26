import { getProductos as getProductosAPI } from "../api/productos";


export function getProductos(){

    return getProductosAPI()
        .then((respuesta) => respuesta.data);

}