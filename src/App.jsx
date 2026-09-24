import { getProductos } from './services/productoService'
import {useState, useEffect} from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductoCard from './components/ProductoCard'
import Buscador from './components/Buscador'
import ProductoDetalle from './components/ProductoDetalle'
import Carrito from './components/Carrito'
import Footer from './components/Footer'


function App() {
  const [productos,setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [busqueda, setBusqueda] = useState('')
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)
  const [carrito, setCarrito] = useState([])
  
  useEffect(() => {

    getProductos()
      .then((datos) => {
        setProductos(datos)
      })
      .catch(() => {
        setError('Error al cargar productos')
      })
      .finally(() => {
        setCargando(false)
      })
  
  }, [])

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(
      (item) => item.id === producto.id
    )
    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      )
    } else {
      setCarrito([
        ...carrito,
        { ...producto, cantidad: 1 }
      ])
    }
  }
  const eliminarDelCarrito = (id) => {
    setCarrito(
      carrito.filter((producto) => producto.id !== id)
    )
  }
  const confirmarPedido = () => {
    if (carrito.length === 0) {
      alert('El carrito esta vacio')
      return
    }
    alert('Pedido realizado correctamente. ¡Gracias por comprar en CaféSahur!')
    setCarrito([])
  }

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  if (cargando) {
    return <h2> Cargando productos...</h2>
  }
  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <>
      <Navbar
        cantidadCarrito={
            carrito.reduce(
                (total, producto) => total + producto.cantidad,
                0   
            )
        } 
      />
      <Hero />
      <section
      id="productos" 
      className="productos"
      >
        <div className="productos__titulo">
          <p>Nuestro menú</p>
          <h2>Explora nuestros productos</h2>
        </div>
        <Buscador
        busqueda={busqueda}
        cambiarBusqueda={setBusqueda}
        />

        <div className="productos__grid">
          {productosFiltrados.map((producto) => (
            <ProductoCard
              key={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              categoria={producto.categoria}
              verDetalle={() => {
                console.log('Abriendo:', producto.nombre)
                setProductoSeleccionado(producto)
              }}
            />
          ))}
        </div>
      </section>
      <Carrito 
        carrito={carrito} 
        eliminarDelCarrito={eliminarDelCarrito}
        ConfirmarPedido={confirmarPedido}
      />
      <Footer />
      {productoSeleccionado && (
        <ProductoDetalle
        producto={productoSeleccionado}
        cerrarDetalle={() => setProductoSeleccionado(null)}
        agregarAlCarrito={agregarAlCarrito}
        />
      )}
    </>
  )
}

export default App