import api from "./client.js";


export function getProductos(){

    return api.get("/productos");

}