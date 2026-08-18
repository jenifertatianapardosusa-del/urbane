function Productos() {
  const productos = [
    {
      id: 1,
      nombre: "Urban Oversize T-Shirt",
      precio: "$89.900",
      categoria: "CAMISETAS",
      imagen: "/camisa.webp",
    },
    {
      id: 2,
      nombre: "Street Cargo Pants",
      precio: "$149.900",
      categoria: "PANTALONES",
      imagen: "/pantalon.jpg",
    },
    {
      id: 3,
      nombre: "Urban Essential Hoodie",
      precio: "$179.900",
      categoria: "HOODIES",
      imagen: "/hoodie.jpg",
    },
    {
      id: 4,
      nombre: "Streetwear Jacket",
      precio: "$219.900",
      categoria: "CHAQUETAS",
      imagen: "/chaqueta.avif",
    },
    {
      id: 5,
      nombre: "Urban Classic Cap",
      precio: "$59.900",
      categoria: "ACCESORIOS",
      imagen: "/gorra.jpg",
    },
  ];

  return (
    <section className="products-section" id="productos">
      <div className="section-heading">
        <div>
          <p className="section-label">NUEVA COLECCIÓN</p>
          <h2>DROP <span>01</span></h2>
        </div>

        <p className="section-description">
          Descubre nuestra selección de prendas
          esenciales para elevar tu estilo.
        </p>
      </div>

      <div className="products-grid">
        {productos.map((producto) => (
          <article className="product-card" key={producto.id}>
            
            <div className="product-image-container">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="product-image"
              />

              <span className="product-category">
                {producto.categoria}
              </span>

              <button className="favorite-button">
                ♡
              </button>
            </div>

            <div className="product-info">
              <h3>{producto.nombre}</h3>

              <div className="product-bottom">
                <span className="price">
                  {producto.precio}
                </span>

                <button className="add-button">
                  +
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Productos;
