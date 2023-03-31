import facebook from "../assets/icons/facebook.svg";

import youtube from "../assets/icons/youtube.svg";
import twitter from "../assets/icons/twitter.svg";
import ins from "../assets/icons/instagram.svg";
import wasap from "../assets/icons/whatsapp.svg";
import telefono from "../assets/icons/telephone.svg";
import geo from "../assets/icons/geo.svg";
import email from "../assets/icons/email.svg";
import back from "../assets/icons/back.svg";
import negativo from '../assets/icons/negativo.png'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div style={{ height: "250px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-1.58,23.19 C327.99,297.53 371.44,-79.44 501.80,87.32 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#161627" }}
          ></path>
        </svg>
      </div>

      <footer className=" w-100 m-0 p-0">
        <div className="footer__container   ">
          <div className="row d-flex">
            <div className="col-12 col-md-6 col-xl-4 text-center text-md-start newsletter ">
             <img src={negativo} style={{width:"50%"}}></img>
              <ul className="footer__list my-4 text-center">
                <li className="footer__list-item me-2">
                  <a href="#" className="footer__list-link">
                    <img
                      src={facebook}
                      width="24px"
                      className="ms-2"
                      alt=""
                    ></img>
                  </a>
                </li>
                <li className="footer__list-item me-2">
                  <a href="#" className="footer__list-link">
                    <img src={ins} width="24px" className="ms-2" alt=""></img>
                  </a>
                </li>
                <li className="footer__list-item me-2">
                  <a href="#" className="footer__list-link">
                    <img
                      src={twitter}
                      width="24px"
                      className="ms-2"
                      alt=""
                    ></img>
                  </a>
                </li>
                <li className="footer__list-item me-2">
                  <a href="#" className="footer__list-link">
                    <img src={wasap} width="24px" className="ms-2" alt=""></img>
                  </a>
                </li>
                <li className="footer__list-item me-2">
                  <a href="#" className="footer__list-link">
                    <img
                      src={youtube}
                      width="24px"
                      className="ms-2"
                      alt=""
                    ></img>
                  </a>
                </li>
              </ul>
              <div className="eslogan-footeer mt-3">
                <p>
                  "Llegamos a todos los rincones <br></br> del pais, para
                  sacarte de apuros en cualquier situación"
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4 text-center text-md-start ">
              <h6 className="footer__title">Navegación</h6>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <img src={back} alt=""></img>
                  <Link to="/#container" className="footer__list-link ms-3">
                    Inicio
                  </Link>
                </li>
                <li className="footer__list-item">
                  <img src={back} alt=""></img>
                  <Link to="/about#container" className="footer__list-link ms-3">
                    Acerca de nosotros
                  </Link>
                </li>
               
                <li className="footer__list-item">
                  <img src={back} alt=""></img>
                  <Link to={"/contactos#container"}  className="footer__list-link ms-3">
                    Ayuda
                  </Link>
                </li>
                <li className="footer__list-item">
                  <img src={back} alt=""></img>
                  <Link  to={"/about"} className="footer__list-link ms-3">
                    Desarrolladores
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-6 col-xl-4 text-center text-md-start ">
              <h6 className="footer__title">Contactanos</h6>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <img src={geo} alt=""></img>
                  <a href="" className="footer__list-link ms-1">
                    Crra 5 #6-67 CTPI SENA Norte
                  </a>
                </li>
                <li className="footer__list-item">
                  <img src={email} alt=""></img>
                  <a href="" className="footer__list-link ms-1">
                    TramoAdmin@gmail.com
                  </a>
                </li>
                <li className="footer__list-item">
                  <img src={telefono} alt=""></img>
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
          <hr className="footer__divider"></hr>

          <div className="footer__bottom w-100 text-center">
            <p className="copyright text-center">
              &copy; 2023 <span className="h6 text-white-50">TRAMO</span>. Todos
              los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
