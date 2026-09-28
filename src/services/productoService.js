import api from '../api/client.js'

export async function getProductos() {
  const respuesta = await api.get('/productos')

  if (!Array.isArray(respuesta.data)) {
    throw new Error('La API no devolvió una lista de productos')
  }

  return respuesta.data
}