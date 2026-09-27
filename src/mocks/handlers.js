import { http, HttpResponse, delay } from 'msw'
import productos from './data/productos.json'

export const handlers = [
  http.get('/api/productos', async () => {
    await delay(500)
    return HttpResponse.json(productos)
  }),
]