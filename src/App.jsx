import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductoCard from './components/ProductoCard'

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
  return (
    <>
      <Navbar />
      <Hero />
      <section className="productos">
        <div className="productos__titulo">
          <p>Nuestro menú</p>
          <h2>Explora nuestros productos</h2>
        </div>

        <div className="productos__grid">
          {productos.map((producto) => (
            <ProductoCard
              key={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              categoria={producto.categoria}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default App