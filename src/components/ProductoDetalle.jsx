function ProductoDetalle({producto, cerrarDetalle, agregarAlCarrito}){
    return(
        <div className="detalle-fondo">
            <div className="detalle">
                <button
                className="detalle__cerrar"
                onClick={cerrarDetalle}
                >
                    x    
                </button>
                <div className="detalle__imagen">
                <img src={producto.imagen}
                 alt={producto.nombre} 
                 />
                </div>

                <span className="detalle__categoria">
                    {producto.categoria}
                </span>

                <h2> {producto.nombre} </h2>

                <p> {producto.descripcion} </p>
                <div className="detalle__footer">
                <strong>
                    ${producto.precio.toLocaleString("es-CL")}
                </strong>

                <button 
                className="detalle__agregar"
                onClick={() => agregarAlCarrito(producto)}              
                >
                    agregar al carrito                   
                </button>
                </div>

                
                
            </div>

        </div>
    )
}

export default ProductoDetalle