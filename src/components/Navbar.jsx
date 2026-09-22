function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="navbar__logo"> 
            CaféSahur
            </h2>

            <div className="navbar__links">
                <a href="#">
                    Inicio
                </a>

                <a href="#">
                    Productos
                </a>
                <a href="#">
                    Menú
                </a>
                
                <button className="navbar__cart">
                    Carrito 🛒
                </button>
            </div>
        </nav>
    )
}
export default Navbar