function Carrito({ carrito, eliminarDelCarrito }) {
  const total = carrito.reduce(
    (suma, producto) =>
      suma + producto.precio * producto.cantidad,
    0
  )

  return (
    <section className="carrito">
      <h2>Tu pedido</h2>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {carrito.map((producto) => (
            <div
              className="carrito__producto"
              key={producto.id}
            >
              <div>
                <strong>{producto.nombre}</strong>
                <span> x{producto.cantidad}</span>
              </div>

              <span>
                ${(producto.precio * producto.cantidad)
                  .toLocaleString('es-CL')}
              </span>

              <button
                onClick={() => eliminarDelCarrito(producto.id)}
              >
                Eliminar
              </button>
            </div>
          ))}

          <div className="carrito__total">
            <span>Total</span>

            <strong>
              ${total.toLocaleString('es-CL')}
            </strong>
          </div>
        </>
      )}
    </section>
  )
}

export default Carrito