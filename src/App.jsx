import {useState} from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductoCard from './components/ProductoCard'
import Buscador from './components/Buscador'
import ProductoDetalle from './components/ProductoDetalle'

const productos = [
  {
    id: 1,
    nombre: 'Latte',
    descripcion: 'Espresso suave combinado con leche vaporizada.',
    precio: 3500,
    categoria: 'Café caliente',
  },
  {
    id: 2,
    nombre: 'Cappuccino',
    descripcion: 'Espresso con leche vaporizada y una capa de espuma.',
    precio: 3200,
    categoria: 'Café caliente',
  },
  {
    id: 3,
    nombre: 'Mocha',
    descripcion: 'Espresso, chocolate y leche vaporizada.',
    precio: 3800,
    categoria: 'Café caliente',
  },
  {
    id: 4,
    nombre: 'Iced Latte',
    descripcion: 'Espresso con leche fría y hielo.',
    precio: 3900,
    categoria: 'Bebida fría',
  },
]

function App() {
  const [busqueda, setBusqueda] = useState('')
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <>
      <Navbar />
      <Hero />
      <section className="productos">
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
      {productoSeleccionado && (
        <ProductoDetalle
        producto={productoSeleccionado}
        cerrarDetalle={() => setProductoSeleccionado(null)}
        />
      )}
    </>
  )
}

export default App