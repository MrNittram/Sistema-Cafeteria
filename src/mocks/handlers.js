import { http, HttpResponse } from "msw";
import { productosIniciales } from "./data.js";


const productos = [...productosIniciales];


export const handlers = [

    http.get("/api/productos", () => {

        return HttpResponse.json(productos);

    })

];