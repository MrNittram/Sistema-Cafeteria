function ProductoCard({ nombre, descripcion, precio, categoria, imagen, verDetalle}) {
    return (
      <article className="producto-card">
        <div className="producto-card__imagen">
        <img src={imagen} 
        alt={nombre} 
        />
        </div>
  
        <div className="producto-card__contenido">
          <span className="producto-card__categoria">
            {categoria}
          </span>
  
          <h3>{nombre}</h3>
  
          <p>{descripcion}</p>
  
          <div className="producto-card__footer">
            <strong>${precio.toLocaleString('es-CL')}</strong>
            <button onClick={verDetalle}>Ver producto</button>
          </div>
        </div>
      </article>
    )
  }
  
  export default ProductoCard