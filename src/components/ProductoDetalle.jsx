function ProductoDetalle({producto, cerrarDetalle}){
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
                    foto
                </div>

                <span className="detalle__categoria">
                    {producto.categoria}
                </span>

                <h2> {producto.nombre} </h2>

                <p> {producto.descripcion} </p>

                <strong>
                    ${producto.precio.toLocaleString("es-CL")}
                </strong>

            </div>

        </div>
    )
}

export default ProductoDetalle