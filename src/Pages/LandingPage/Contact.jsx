import facebook from "../../assets/icons/facebook.svg";
import youtube from "../../assets/icons/youtube.svg";
import twitter from "../../assets/icons/twitter.svg";
import ins from "../../assets/icons/instagram.svg";
import wasap from "../../assets/icons/whatsapp.svg";
import telefono from "../../assets/icons/telephone.svg";
import email from "../../assets/icons/email.svg";
import celular from "../../assets/icons/telefono-inteligente.gif";
import Preguntas from "./Preguntas";

function Contact() {
  return (
    <>
      <section id="faq pb-sm-5 container my-5 mt-5">
        <Preguntas />
      </section>

      {/* section fin */}

      {/* Contactanos */}

      <div class="d-flex justify-content-center align-items-end mt-5">
        <img src={celular} alt="" width="68px" height="68px"></img>
        <h1 className="fw-bold fs-2 dark lh-sm align-items-end font">
          Contactanos
        </h1>
      </div>
      <div className="mt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.073285212112!2d-76.5646593855345!3d2.482692857580904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e300410eb607c65%3A0x614545787e90bea6!2sSENA!5e0!3m2!1ses!2sco!4v1669607479158!5m2!1ses!2sco"
          width="100%"
          height="500"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <section className="contact-area font">
        <div className="container-form-contacto bg-secondary   p-5">
          <div className="row">
            <div className="col-12">
              <div className="contact-content">
                <div className="row">
                  <div className="col-12 col-lg-5 ">
                    <div
                      className="contact-information wow fadeInUp"
                      data-wow-delay="400ms"
                    >
                      <div>
                        <p className="font dark fs-2 fw-bold">
                          Dejanos un mensaje
                        </p>
                        <p className="mt-30 font">
                          {" "}
                          Dejanos saber tus dudas, o inconvenientes que hayas
                          tenido durante el uso de nuestra aplicacion.
                        </p>
                      </div>

                      <div>
                        <ul className="iconos-form">
                          <li className="form__list-item ">
                            <a href="#" className="form__list-link">
                              <img
                                src={facebook}
                                width="24px"
                                className="mx-2"
                                alt=""
                              ></img>
                            </a>
                          </li>
                          <li className="form__list-item me-2">
                            <a href="#" className="form__list-link">
                              <img
                                src={ins}
                                width="24px"
                                className="ms-2"
                                alt=""
                              ></img>
                            </a>
                          </li>
                          <li className="form__list-item me-2">
                            <a href="#" className="form__list-link">
                              <img
                                src={twitter}
                                width="24px"
                                className="ms-2"
                                alt=""
                              ></img>
                            </a>
                          </li>
                          <li className="form__list-item me-2">
                            <a href="#" className="form__list-link">
                              <img
                                src={wasap}
                                width="24px"
                                className="ms-2"
                                alt=""
                              ></img>
                            </a>
                          </li>
                          <li className="form__list-item me-2">
                            <a href="#" className="form__list-link">
                              <img
                                src={youtube}
                                width="24px"
                                className="ms-2"
                                alt=""
                              ></img>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <h4 className="dark fw-bold">Contactanos</h4>
                      <div className="single-contact-info d-flex">
                        <ul className="footer__list">
                          <li className="footer__list-item">
                            <img src={email} alt=""></img>
                            <a href="" className="footer__list-link ms-1">
                              TramoAdmin@gmail.com
                            </a>
                          </li>
                          <li className="footer__list-item">
                            <img
                              className="text-danger"
                              src={telefono}
                              alt=""
                            ></img>
                            <a href="" className="footer__list-link ms-1">
                              +57 3235234567
                            </a>
                          </li>
                          <li className="footer__list-item">
                            <img src={telefono} alt=""></img>
                            <a href="" className="footer__list-link ms-1">
                              +57 3235234567
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-7">
                    <div
                      className="contact-form-area wow fadeInUp mt-3 mt-lg-0"
                      data-wow-delay="500ms"
                    >
                      <form action="#" method="post">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                        ></input>
                        <input
                          type="email"
                          className="form-control mt-2"
                          id="email"
                          placeholder="E-mail"
                        ></input>
                        <textarea
                          name="message"
                          className="form-control descripcion-pregunta my-2"
                          id="message"
                          cols="30"
                          rows="7"
                          placeholder="Message"
                        ></textarea>
                        <button
                          className="btn btn-primary w-100 mt-30 p-2"
                          type="submit"
                        >
                          Contactanos
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
