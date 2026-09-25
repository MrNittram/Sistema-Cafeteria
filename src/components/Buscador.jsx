function Buscador({ busqueda, cambiarBusqueda }) {
    return (
      <div className="buscador">
        <input
  className="buscador__input"
  type="text"
  placeholder="Buscar productos..."
  value={busqueda}
  onChange={(event) => cambiarBusqueda(event.target.value)}
/>
      </div>
    )
  }
  
  export default Buscador