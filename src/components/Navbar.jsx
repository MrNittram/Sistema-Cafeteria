function Navbar({ cantidadCarrito }) {

    return (
      <nav className="navbar">
  
        <div className="navbar__logo">
          CaféSahur ☕
        </div>
  
  
        <div className="navbar__links">
  
          <a href="#inicio">
            Inicio
          </a>
  
          <a href="#productos">
            Productos
          </a>
  
          <a href="#productos">
            Menú
          </a>
  
        </div>
  
  
        <a 
          href="#carrito" 
          className="navbar__cart"
        >
          🛒 Carrito ({cantidadCarrito})
        </a>
  
  
      </nav>
    )
  }
  
  export default Navbar