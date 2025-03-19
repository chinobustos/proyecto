import React from "react";
import { Link } from "react-router-dom";

const carouselImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/flagged/photo-1568381670226-fab8dc323343?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Inscribir Jinetes",
    description: "Un jinete, un sueño, una meta: la victoria.",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1617906693778-49ced8bcbb62?q=80&w=1564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1566251037378-5e04e3bec343?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    title: "COPA LLAY LLAY",
    category: "Enduro",
    date: "29 de Marzo - 30 de Marzo",
    location: "Desarrollo Agrario, Llay Llay",
    address: "Camino las Flores 13.000, Las Condes",
    image:
      "https://images.unsplash.com/photo-1566251037378-5e04e3bec343?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      <div className="container">
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
        <div className="championships-section mb-5">
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
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer with Contact Form */}
      <footer className="footer bg-light mt-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <h3>Contact Us</h3>
              <form className="contact-form">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <h3>About EquestrianPro</h3>
              <p>
                We are dedicated to connecting horse enthusiasts with their
                perfect equine companions. With years of experience in the
                equestrian world, we provide top-quality horses and professional
                services.
              </p>
              <div className="contact-info mt-4">
                <p>
                  <strong>Address:</strong> 123 Equestrian Way, Madrid, Spain
                </p>
                <p>
                  <strong>Phone:</strong> +34 123 456 789
                </p>
                <p>
                  <strong>Email:</strong> info@equestrianpro.com
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
                &copy; 2024 EquestrianPro. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
