import Productos from "./components/Productos";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">URBANE</div>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
        </nav>

        <button className="cart-button">
          🛒 Carrito
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <p className="hero-subtitle">STREETWEAR / 2026</p>

            <h1>
              VISTE
              <br />
              <span>DIFERENTE.</span>
            </h1>

            <p className="hero-text">
              Ropa urbana para quienes crean su propio estilo.
            </p>

            <a href="#productos" className="hero-button">
              VER COLECCIÓN
            </a>
          </div>
        </section>

        <Productos />

        <section className="about" id="nosotros">
          <p className="section-label">SOBRE URBANE</p>
          <h2>
            TU ESTILO.
            <br />
            TUS REGLAS.
          </h2>

          <p>
            URBANE nace para representar la cultura streetwear,
            combinando comodidad, actitud y diseño para crear
            prendas que hablan por ti.
          </p>
        </section>
      </main>

      <footer>
        <div className="logo">URBANE</div>
        <p>© 2026 URBANE. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
