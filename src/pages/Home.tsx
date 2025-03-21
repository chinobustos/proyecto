import React from "react";
import { Link } from "react-router-dom";

const carouselImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1595676800779-7d98f941e494?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Inscribir Jinetes",
    description: "Un jinete, un sueño, una meta: la victoria.",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1536356953159-9043c2260bba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Inscribir Caballos",
    description: "Donde la destreza y la belleza se encuentran.",
  },
];

const horses = [
  {
    id: 1,
    name: "Inscribir Jinete",
    image:
      "https://images.unsplash.com/photo-1600715150567-e46cb820f1ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Inscribir Caballo",
    image:
      "https://images.unsplash.com/photo-1573751055635-a0ad5937fd37?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const championships = [
  {
    id: 1,
    title: "COPA LLAY LLAY",
    category: "Enduro",
    date: "29 de Marzo - 30 de Marzo",
    location: "Desarrollo Agrario",
    address: "Llayllay, Valparaíso",
    image:
      "https://images.unsplash.com/photo-1511746687876-42cb762f6ac1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "CONCURSO OFICIAL DE ADIESTRAMIENTO CDUC",
    category: "Adiestramiento",
    date: "29 de Marzo - 30 de Marzo",
    location: "Club Deportivo Universidad Catolica",
    address: "Camino las Flores 13.000, Las Condes",
    image:
      "https://images.unsplash.com/photo-1566251037378-5e04e3bec343?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "TEST PLATAFORMA-Santiago ",
    category: "SALTO",
    date: "02 de Diciembre - 31 de Diciembre",
    location: "Paperchase Club",
    address: "Calle 123.",
    image:
      "https://images.unsplash.com/photo-1593353918842-5e2cb1366a2c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Home = () => {
  return (
    <div>
      {/* Carousel */}
      <div
        id="homeCarousel"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {carouselImages.map((image, index) => (
            <div
              key={image.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={image.url}
                className="d-block w-100"
                alt={image.title}
                style={{ height: "600px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>{image.title}</h2>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="container" id="inscripciones">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="text-center mb-4">INSCRIPCIONES</h1>
            <p className="text-center">
              "Inscripción Abierta para la Competencia de Caballos y Jinetes"
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          {horses.map((horse) => (
            <div key={horse.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={horse.image}
                  className="card-img-top"
                  alt={horse.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{horse.name}</h5>
                  <button className="btn btn-primary w-100">Inscribir</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Championships Section */}
        <div className="championships-section mb-5" id="competencias">
          <h1 className="text-center mb-4">COMPETENCIAS</h1>
          <p className="text-center my-5">
            "Inscripción Abierta para la Competencia de Caballos y Jinetes"
          </p>
          <div className="row">
            {championships.map((championship) => (
              <div key={championship.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img
                    src={championship.image}
                    className="card-img-top"
                    alt={championship.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{championship.title}</h5>
                    <p className="card-text">
                      <strong>Categoria:</strong> {championship.category}
                      <br />
                      <strong>Fecha:</strong> {championship.date}
                      <br />
                      <strong>Localización:</strong> {championship.location}
                      <br />
                      <strong>Dirección:</strong> {championship.address}
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <button className="btn btn-primary w-100">
                      REGISTRATE AHORA
                    </button>
                    <button className="btn btn-primary w-100">
                      VER LISTADO DE INSCRIPTOS
                    </button>
                    <button className="btn btn-primary w-100">
                      DESCARGAR BASES
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/*slide*/}
        <div className="slider">
          <div className="slider-track">
             <div className="slide"><img src="https://datafech.cl/assets/public/img/fech.png" alt="" /></div>
             <div className="slide"><img src="https://www.citypng.com/public/uploads/preview/hd-black-coca-cola-logo-png-7017516947784963lgffdrc6r.png" alt=""  /> </div>
             <div className="slide"><img src="https://www.vhv.rs/dpng/d/604-6047676_chile-tourism-logo-hd-png-download.png" alt=""  /> </div>
             <div className="slide"><img src="https://e7.pngegg.com/pngimages/541/42/png-clipart-horse-logos-graphic-design-horse-horse-mammal.png" alt=""  /> </div>
             <div className="slide"><img src="https://fem.org.mx/wp-content/uploads/2023/03/FEI_Logo_RGB_Purple_HR-1024x545.png" alt=""  /> </div>
             <div className="slide"><img src="https://datafech.cl/assets/public/img/fech.png" alt="" /></div>
             <div className="slide"><img src="https://www.citypng.com/public/uploads/preview/hd-black-coca-cola-logo-png-7017516947784963lgffdrc6r.png" alt=""  /> </div>
             <div className="slide"><img src="https://www.vhv.rs/dpng/d/604-6047676_chile-tourism-logo-hd-png-download.png" alt=""  /> </div>
             <div className="slide"><img src="https://e7.pngegg.com/pngimages/541/42/png-clipart-horse-logos-graphic-design-horse-horse-mammal.png" alt=""  /> </div>
             <div className="slide"><img src="https://fem.org.mx/wp-content/uploads/2023/03/FEI_Logo_RGB_Purple_HR-1024x545.png" alt=""  /> </div>
          </div>
        </div>
      {/* Footer with Contact Form */}
      <footer className="footer bg-light mt-5 py-5" id="contacto">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <h3>CONTACTANOS</h3>
              <form className="contact-form">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder=" Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Mensaje"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <h3>Acerca de Asociación Encuentre</h3>
              <p>
              Nos dedicamos a conectar a los amantes de los caballos con sus compañeros equinos ideales. Con años de experiencia en el mundo ecuestre, ofrecemos caballos de primera calidad y servicios profesionales.
              </p>
              <div className="contact-info mt-4">
                <p>
                  <strong>Direccion:</strong> Plaza Sucre 208-272, en Valparaíso, Viña del Mar
                </p>
                <p>
                  <strong>Numero:</strong> +56 32 680016
                </p>
                <p>
                  <strong>Email:</strong>clubvina@vtr.net, contacto@clubvina.cl
                </p>
              </div>
              <div className="social-links mt-4">
                <a href="#" className="me-3">
                  Facebook
                </a>
                <a href="#" className="me-3">
                  Instagram
                </a>
                <a href="#" className="me-3">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 text-center">
              <p className="mb-0">
                &copy; 2024  Asociación Encuestre-Valparaiso. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
