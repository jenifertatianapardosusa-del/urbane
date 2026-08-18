import { useState } from "react";

function Productos() {

  const [favoritos, setFavoritos] = useState([]);

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


  /* FAVORITOS */

  const toggleFavorito = (id) => {

    setFavoritos((favoritosActuales) => {

      if (favoritosActuales.includes(id)) {

        return favoritosActuales.filter(
          (favoritoId) => favoritoId !== id
        );

      }

      return [
        ...favoritosActuales,
        id
      ];

    });

  };


  return (

    <section
      className="products-section"
      id="productos"
    >

      {/* ENCABEZADO */}

      <div className="section-heading">

        <div>

          <p className="section-label">
            NUEVA COLECCIÓN
          </p>

          <h2>
            DROP <span>01</span>
          </h2>

        </div>

        <p className="section-description">
          Descubre nuestra selección de prendas
          esenciales para elevar tu estilo.
        </p>

      </div>


      {/* PRODUCTOS */}

      <div className="products-grid">

        {productos.map((producto) => {

          const esFavorito =
            favoritos.includes(producto.id);

          return (

            <article
              className="product-card"
              key={producto.id}
            >

              {/* IMAGEN */}

              <div className="product-image-container">

                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="product-image"
                />


                {/* CATEGORÍA */}

                <span className="product-category">
                  {producto.categoria}
                </span>


                {/* FAVORITO */}

                <button
                  type="button"
                  className={`favorite-button ${
                    esFavorito
                      ? "favorite-active"
                      : ""
                  }`}
                  onClick={() =>
                    toggleFavorito(producto.id)
                  }
                  aria-label={
                    esFavorito
                      ? "Quitar de favoritos"
                      : "Agregar a favoritos"
                  }
                >
                  {esFavorito ? "♥" : "♡"}
                </button>

              </div>


              {/* INFORMACIÓN */}

              <div className="product-info">

                <h3>
                  {producto.nombre}
                </h3>


                <div className="product-bottom">

                  <span className="price">
                    {producto.precio}
                  </span>


                  {/* + VISUAL - TODAVÍA NO FUNCIONA */}

                  <button
                    type="button"
                    className="add-button"
                    onClick={() => {}}
                    aria-label="Agregar al carrito"
                  >
                    +
                  </button>

                </div>

              </div>

            </article>

          );

        })}

      </div>

    </section>

  );
}

export default Productos;
