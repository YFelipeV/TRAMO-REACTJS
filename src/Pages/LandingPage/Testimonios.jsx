import testimonio1 from "../assets/icons/testimonio1.jpg";
import testimonio2 from "../assets/icons/testimonio2.jpg";
import testimonio3 from "../assets/icons/testimonio3.jpg";
import comillas from "../assets/icons/comillas.png";
function Testimonios() {
  return (
    <>
      <div className="container-fluid w-100  my-5 font">
        <h1 className="text-center mt-5 fw-bold ">TESTIMONIOS</h1>
        <div
          id="carouselExampleControls"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="card m-auto my-4 card-testimonios"
                style={{ maxWidth: "650px" }}
              >
                <img className="comillas-img" src={comillas} alt="" />
                <div className="card-body">
                  <p className="card-text px-5 mt-3 ">
                    TRAMO es una buena idea para ayudar a mejor la forma en que
                    se solicita un servicio de Transporte de carga, es de gran
                    ayuda para el gremio de conductores, Desde que la uso han
                    aumentado mis ingresos y todo el tiempo recibo solicitudes
                    de nuevos clientes
                  </p>
                </div>
                <img
                  src={testimonio1}
                  className="card-img-top m-auto w-25 rounded-circle"
                  alt="..."
                />
                <h5 className="fw-bold text-center">Sebastian Herrera</h5>
                <h6 className="fw-lighter text-center">Conductor</h6>
              </div>
            </div>

            <div className="carousel-item">
              <div
                className="card m-auto my-4 card-testimonios"
                style={{ maxWidth: "650px" }}
              >
                <img className="comillas-img" src={comillas} alt="" />
                <div className="card-body">
                  <p className="card-text px-5 mt-3 ">
                    TRAMO es una buena idea para ayudar a mejor la forma en que
                    se solicita un servicio de Transporte de carga, es de gran
                    ayuda para el gremio de conductores, Desde que la uso han
                    aumentado mis ingresos y todo el tiempo recibo solicitudes
                    de nuevos clientes
                  </p>
                </div>
                <img
                  src={testimonio2}
                  className="card-img-top m-auto w-25 rounded-circle"
                  alt="..."
                />
                <h5 className="fw-bold text-center">Francisco Matinez</h5>
                <h6 className="fw-lighter text-center">Conductor</h6>
              </div>
            </div>

            <div className="carousel-item">
              <div
                className="card m-auto my-4 card-testimonios"
                style={{ maxWidth: "650px" }}
              >
                <img className="comillas-img " src={comillas} alt="" />
                <div className="card-body">
                  <p className="card-text px-5  mt-3">
                    TRAMO es una buena idea para ayudar a mejor la forma en que
                    se solicita un servicio de Transporte de carga, es de gran
                    ayuda para el gremio de conductores, Desde que la uso han
                    aumentado mis ingresos y todo el tiempo recibo solicitudes
                    de nuevos clientes
                  </p>
                </div>
                <img
                  src={testimonio3}
                  className="card-img-top m-auto w-25 rounded-circle"
                  alt="..."
                />

                <h5 className="fw-bold text-center">Marcelo Pelaez</h5>
                <h6 className="fw-lighter text-center">Conductor</h6>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Testimonios;
