function Carrito({ carrito }) {
    const total = carrito.reduce(
      (suma, producto) => suma + producto.precio,
      0
    )
  
    return (
      <section className="carrito">
        <h2>Tu pedido</h2>
  
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            {carrito.map((producto, index) => (
              <div className="carrito__producto" key={index}>
                <span>{producto.nombre}</span>
  
                <strong>
                  ${producto.precio.toLocaleString('es-CL')}
                </strong>
              </div>
            ))}
  
            <div className="carrito__total">
              <span>Total</span>
              <strong>${total.toLocaleString('es-CL')}</strong>
            </div>
          </>
        )}
      </section>
    )
  }
  
  export default Carrito