import "../css/style.css";

import imagen1 from "../assets/ilustraciones/movil-inicio.png";
import imagen2 from "../assets/icons/arrow-right.png";
import company_1 from "../assets/sponsor/company-1.png";
import company_2 from "../assets/sponsor/company-2.png";
import company_3 from "../assets/sponsor/company-3.png";
import company_4 from "../assets/sponsor/company-4.png";
import ilustracion from "../assets/ilustraciones/movil-cliente.png";
import icon1 from "../assets/icons/fast-performance.png";
import icon2 from "../assets/icons/prototype.png";
import icon3 from "../assets/icons/vector.png";
import acerca from "../assets/ilustraciones/acerca_nosotros_ilus.svg";
import appstore from "../assets/icons/app-store.png";
import playstore from "../assets/icons/google-play.png";
import ilustracion2 from "../assets/ilustraciones/cta.svg";
import { Link } from "react-router-dom";
import Testimonios from "./Testimonios";
import hero from '../assets/ilustraciones/hero-bg.png'
import { lazy } from "react";
function Home() {
  return (
    <>
      <section className="   index_inicio  " id="home container">
        <div className="container   mt-5">
          <div className="row align-items-center  w-100  ">
            <div className="col-md-5 col-lg-6 order-md-1 text-center ">
              <img
                className="img-fluid flotante"
                src={imagen1}
                loading={lazy}
                style={{ maxWidth: "270px" }}
                alt=""
              ></img>
            </div>
            <div className="col-md-7  col-lg-6 text-center text-md-start">
              <span className="badge bg_gray rounded-pill text-dark align-items-center d-flex flex-row-reverse justify-content-end mx-auto mx-md-0 ps-0 w-100 w-sm-50 w-md-75 w-xl-0 my-3 ">
                APP #1 Transporte De Carga 2023
                <img
                  className="img-fluid float-start me-4   "
                  loading={lazy}
                  src={imagen2}
                  alt=""
                ></img>
              </span>
              <h1 className="mb-4  display-5 fw-bold lh-sm dark pt-3">
                TRAMO <br className="d-block d-lg-none d-xl-block d5 " />
                <span className="display-5 fw-bold maquina">
                  Transporte y Movilidad
                </span>
              </h1>
              <p className="mt-3 mb-4 fs-5   gray">
                Solicita tu servicio desde cualquier lugar{" "}
                <br className="d-none d-lg-block fw-bold" />
                Descargando nuestra aplicación, disponible para Android y IOS
              </p>
              <div className="text-center text-md-start">
                <a
                  className="btn btn-lg btn-success rounded-pill hover-top bg_green mt-3"
                  href="#descarga-con"
                >
                  Descarga Gratis
                </a>
              </div>
            </div>
          </div>
          {/* <img src={hero} className="w-100 " alt="" /> */}
        </div>
        <div className="d-flex justify-content-center   w-100 ">
    
        </div>
        
      </section>
     
      {/* fin section */}

      {/* sponsor */}
      <section className="py-5 ">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto align-items-center text-center">
              <p className="mb-5 mt-1 text-secondary fs-5">
                Empresas que trabajan con nosotros
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-center justify-content-lg-around">
            <div className="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center">
              <img src={company_1} loading={lazy} alt=""></img>
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center">
              <img src={company_2} loading={lazy} alt=""></img>
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center">
              <img src={company_3} loading={lazy} alt=""></img>
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center">
              <img src={company_4} loading={lazy} alt=""></img>
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center">
              <img src={company_1} loading={lazy} alt=""></img>
            </div>
          </div>
        </div>
      </section>
      {/* fin section */}

      {/* Caracteristicas de la APP */}
      <section className="py-1" id="features">
        <div className="container-lg pt-2 mt-2">
          <div className="row align-items-center">
            <div className="col-md-4 col-lg-5 order-md-0  text-start mb-5 mb-md-0 conEmpresa">
              <img
                className="img-fluid ilustracionEmpresa flotante"
                src={ilustracion}
                style={{ maxWidth: "290px" }}
                loading={lazy}
                alt=""
              ></img>
            </div>
            <div className="col-md-8 col-lg-7 px-sm-5 px-md-0 text-start">
              <h6 className="fw-bold  fs-2 lh-sm text-start dark">
                Caracteristicas de la
                <br />
                App TRAMO
              </h6>
              <p className="my-4 text-secondary fs-5">
                TRAMO conecta el campo y las ciudades en una sola aplicación,
                <br className="d-none d-xl-block" />
                siendo la primera empresa con enfoque en el campo.
              </p>
              <div className="d-flex align-items-center mb-5">
                <div>
                  <img
                    className="img-fluid "
                    src={icon1}
                    loading={lazy}
                    width="90"
                    alt=""
                  ></img>
                </div>
                <div className="px-4">
                  <h5 className="fw-bold text-danger">Servicios Rapidos</h5>
                  <p className="text-secondary fs-5">
                    Encuentra los vehiculos disponibles que esten{" "}
                    <br className="d-none d-xl-block"></br> más cerca de tu
                    ubicación.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div>
                  <img
                    className="img-fluid "
                    src={icon2}
                    width="90"
                    loading={lazy}
                    alt=""
                  ></img>
                </div>
                <div className="px-4">
                  <h5 className="fw-bold text-primary">Ahorro</h5>
                  <p className="text-secondary fs-5">
                    Podrás ahorrar en tiempo y precios reduciendo{" "}
                    <br className="d-none d-xl-block"></br>y controlando los
                    sobreprecios en los servicios
                    <br className="d-none d-xl-block"></br> de transporte
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div>
                  <img
                    className="img-fluid "
                    src={icon3}
                    loading={lazy}
                    width="90"
                    alt=""
                  ></img>
                </div>
                <div className="px-4">
                  <h5 className="fw-bold text-success">
                    Desarrollo Para El Campo
                  </h5>
                  <p className="text-secondary fs-5">
                    Ofrecemos cobertura en en zonas urbanas y rurales
                    <br className="d-none d-xl-block"></br>para sacarte de
                    apuros en cualquier condición.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* fin section */}

      {/* Acerca de nosotros */}
      <section className="py-sm-4  my-sm-2 py-md-4 my-md-5">
        <div className="container pt-md-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start offset-md-1 mb-sm-5">
              <h6 className="fw-bold display-6 dark lh-sm">
                Acerca de Nosotros
              </h6>
              <p className="my-4  pe-xl-5 fs-6 font text-secondary ">
                {" "}
                TRAMO es una aplicación que conecta de forma más fácil, rapida y
                segura a las personas que requieren de un servicio de transporte
                de carga para sus productos. No solamente con enfoque en las
                ciudades, sino que también en el campo, debido a que en el
                departamento del Cauca cerca del 60% de la población pertenece a
                zonas rurales.
              </p>
              <Link
                className="btn btn-lg btn-primary rounded-pill text-center hover-top   px-4 py-2 "
                to="/about"
                role="button"
              >
                Ver Más
              </Link>
            </div>
            <div className="col-md-5 order-md-0 text-center text-md-start pt-sm-5">
              <img
                className="img-fluid acercaImg my-md-5  flotante"
                src={acerca}
                loading={lazy}
                width="300"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </section>
      {/* fin section */}

      {/* Testimonios */}
      <Testimonios />
      {/* fin section */}

      {/* Preguntas frecuentes */}
      <section id="faq pb-sm-5">
        <div className="container py-sm-2 pt-md-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 text-center mb-3">
              <h6 className="  fw-bold lh-sm mb-3 display-6 dark dark py-2">
                Preguntas Frecuentes
              </h6>
              <p className="pb-3 fs-6 font text-secondary ">
                En este apartado podras encontrar todas las preguntas frecuentes
                que nuestros usuarios han echo con anterioridad. En caso de que
                no encuentres lo que buscas, contactactanos pulsando{" "}
                <a href="./contactos.html">aqui</a>
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center ">
            <div></div>
            <div className="col-lg-9 fs-6 font text-secondary ">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="heading1">
                    <button
                      className="accordion-button bg_azul"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      <span className=" fs-5   mb-0 fw-bold text-start  dark">
                        How to contact with riders emergency?
                      </span>
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse show  "
                    id="collapse1"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body  text-secondary bg_azul ">
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews. Iterative approaches to corporate
                      strategy foster collaborative thinking to further the
                      overall value proposition. Organically grow the holistic
                      world view of disruptive innovation via workplace
                      diversity and empowerment.Bring to the table win-win
                      survival strategies to ensure proactive domination. At the
                      end of the day, going forward, a new normal that has
                      evolved from generation X is on the runway heading towards
                      a streamlined cloud solution. User generated content in
                      real-time will have multiple touchpoints for offshoring.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="heading2">
                    <button
                      className="accordion-button collapsed bg_azul"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="true"
                      aria-controls="collapse2"
                    >
                      <span className="mb-0 fs-5  fw-bold text-start bg_azul  dark">
                        App installation failed, how to update system
                        information?
                      </span>
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse bg_azul"
                    id="collapse2"
                    aria-labelledby="heading2"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body text-secondary  bg_azul">
                      You can issue either partial or full refunds. There are no
                      fees to refund a charge, but the fees from the original
                      charge are not returned.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="heading3">
                    <button
                      className="accordion-button collapsed bg_azul"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="true"
                      aria-controls="collapse3"
                    >
                      <span className="mb-0 fs-5 fw-bold text-start dark ">
                        Website reponse taking time, how to improve?
                      </span>
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse bg_azul"
                    id="collapse3"
                    aria-labelledby="heading3"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body  text-secondary bg_azul">
                      Disputed payments (also known as chargebacks) incur a
                      $15.00 fee. If the customer’s bank resolves the dispute in
                      your favor, the fee is fully refunded.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="heading4">
                    <button
                      className="accordion-button collapsed bg_azul"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="true"
                      aria-controls="collapse4"
                    >
                      <span className="mb-0 fs-5 fw-bold text-start  dark ">
                        New update fixed all bug and issues
                      </span>
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse"
                    id="collapse4"
                    aria-labelledby="heading4"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body text-secondary bg_azul">
                      There are no additional fees for using our mobile SDKs or
                      to accept payments using consumer wallets like Apple Pay
                      or Google Pay.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="heading5">
                    <button
                      className="accordion-button collapsed bg_azul"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="true"
                      aria-controls="collapse5"
                    >
                      <span className="mb-0 fs-5 text-start fw-bold  dark">
                        How to contact with riders emergency?
                      </span>
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse"
                    id="collapse5"
                    aria-labelledby="heading5"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body text-secondary bg_azul">
                      There are no additional fees for using our mobile SDKs or
                      to accept payments using consumer wallets like Apple Pay
                      or Google Pay.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* fin section */}

      {/* section descarga */}
      <section className="pt-sm-3 mt-md-5 pt-sm-2 pt-md-5 " id="descarga-con">
        <div className="container mt-sm-3 mt-md-5 ">
          <div className="row align-items-center">
            <div className="col-md-5 col-lg-5 order-md-1 text-center z-index-2 cta-image ">
              <img
                className="img-fluid mb-4 mb-md-0 img_descarga ilustracion  w-75 flotante"
                src={ilustracion2}
                loading={lazy}
                alt=""
              ></img>
            </div>
            <div className="col-md-7 col-lg-7 text-center text-md-start">
              <h1 className="display-5 fw-bold lh-sm mt-md-8  dark">
                Descarga La App De Tramo
              </h1>
              <p className="my-4 fs-5 text-secondary">
                {" "}
                The rise of mobile devices transforms the way we consume
                information entirely and the world's most elevant channels such
                as Facebook.
              </p>
              <div className="d-flex justify-content-center d-md-inline-block">
                <a className="pe-2 pe-sm-3 pe-md-4" href="!#">
                  <img className="w-sm-50 w-md-50" src={playstore} alt=""></img>
                </a>
                <a href="!#">
                  <img
                    className="w-sm-25 w-md-50 appstore"
                    src={appstore}
                    loading={lazy}
                    alt=""
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
