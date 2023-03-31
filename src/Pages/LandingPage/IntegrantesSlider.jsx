import felipeD from "../assets/Integrantes/Perfil_SF.png";

import jhon from "../assets/Integrantes/JhonSF.png";
import felipeS from "../assets/Integrantes/SeguraSF.png";
import carlos from '../assets/Integrantes/carlos.png'
import yonathan from "../assets/Integrantes/YonatanSF.png";
import hernan from "../assets/Integrantes/HernanSF2.png";
import facebook from "../assets/icons/facebook.svg";
import ins from "../assets/icons/instagram.svg";
import wasap from "../assets/icons/whatsapp.svg";

function IntegrantesSlider() {
  return (
    <>
      <div className="d-flex justify-content-center bg-white d-md-none carousel-pequeño font">
        <div
          id="carouselExampleFade2"
          className="carousel carousel-dark slide carousel-fade w-100 my-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner px-5">
            <div className="carousel-item active text-center d-flex  justify-content-center  w-100">
              <div
                className="card card-integrantes my-5"
                style={{ width: "18rem" }}
              >
                <img
                  src={felipeD}
                  className="card-img-top m-auto d-block w-75"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Felipe Dulcey Idrobo</h5>
                  <h6 className="font" >Scrum Master</h6>
                  <ul className="d-flex redes-integrantes justify-content-center">
                    <li>
                      <a className=" bg-yellow wasap" target={"_blank"} href="">
                        <img src={wasap} className=" p-2 rounded mb-2" alt="" />
                      </a>
                    </li>
                    <li>
                      <a className=" bg-yellow  instagram" target={"_blank"} href="">
                        <img src={ins} className=" p-2 rounded mb-2" alt="" />
                      </a>
                    </li>
                    <li>
                      <a className=" bg-yellow facebook" target={"_blank"} href="">
                        <img
                          src={facebook}
                          className=" p-2 rounded mb-2"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item text-center d-flex  justify-content-center  w-100">
              <div
                className="ms-3 card card-integrantes my-5"
                style={{ width: "18rem" }}
              >
                <img
                  src={carlos}
                  className="card-img-top m-auto d-block w-100"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Carlos Noguera Cordoba</h5>
                  <h6 className="font" >Product Owner</h6>
                  <ul className="d-flex redes-integrantes justify-content-center">
                    <li>
                      <a className=" bg-yellow wasap" target={"_blank"} href="">
                        <img src={wasap} className=" p-2 rounded mb-2" alt="" />
                      </a>
                    </li>
                    <li>
                      <a className=" bg-yellow instagram" target={"_blank"} href="">
                        <img src={ins} className=" p-2 rounded mb-2" alt="" />
                      </a>
                    </li>
                    <li>
                      <a className=" bg-yellow facebook" target={"_blank"} href="">
                        <img
                          src={facebook}
                          className=" p-2 rounded mb-2"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="carousel-item text-center d-flex justify-content-center  w-100">
              <div
                className="card card-integrantes my-5"
                style={{ width: "18rem" }}
              >
                <img
                  src={felipeS}
                  className="card-img-top m-auto d-block w-75"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Felipe Segura Villamarin</h5>
                  <h6 className="font" >Full Stack Developer</h6>
                  <ul className="d-flex redes-integrantes justify-content-center">
                    <li>
                      <a className=" bg-yellow wasap" target={"_blank"} href="">
                        <img src={wasap} className=" p-2 rounded mb-2" alt="" />
                      </a>
                    </li>
                    <li>
                      <a className=" bg-yellow instagram" target={"_blank"} href="">
                        <img src={ins} className=" p-2 rounded mb-2" alt="" />
                      </a>
                    </li>
                    <li>
                      <a className=" bg-yellow facebook" target={"_blank"} href="">
                        <img
                          src={facebook}
                          className=" p-2 rounded mb-2"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item text-center d-flex  justify-content-center  w-100">
              <div
                className="ms-3  card card-integrantes my-5"
                style={{ width: "18rem" }}
              >
                <img
                  src={jhon}
                  className="card-img-top m-auto d-block w-75"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Jhon Sebastian Hurtado</h5>
                  <h6 className="font" >Full Stack Developer</h6>
                  <ul className="d-flex redes-integrantes justify-content-center">
                    <li>
                      <a className=" bg-yellow wasap" target={"_blank"} href="">
                        <img src={wasap} className=" p-2 rounded mb-2" alt="" />
                      </a>
                    </li>
                    <li>
                      <a className=" bg-yellow instagram" target={"_blank"} href="">
                        <img src={ins} className=" p-2 rounded mb-2" alt="" />
                      </a>
                    </li>
                    <li>
                      <a className=" bg-yellow facebook" target={"_blank"} href="">
                        <img
                          src={facebook}
                          className=" p-2 rounded mb-2"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="carousel-item text-center d-flex justify-content-center  w-100">
              <div
                className="card card-integrantes my-5"
                style={{ width: "18rem" }}
              >
                <img
                  src={yonathan}
                  className="card-img-top m-auto d-block w-75"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Yonatan David Pechene</h5>
                  <h6 className="font" >Full Stack Developer</h6>
                  <ul className="d-flex redes-integrantes justify-content-center">
                    <li>
                      <a className=" bg-yellow wasap" target={"_blank"} href="">
                        <img src={wasap} className=" p-2 rounded mb-2" alt="" />
                      </a>
                    </li>
                    <li>
                      <a className=" bg-yellow instagram" target={"_blank"} href="">
                        <img src={ins} className=" p-2 rounded mb-2" alt="" />
                      </a>
                    </li>
                    <li>
                      <a className=" bg-yellow facebook" target={"_blank"} href="">
                        <img
                          src={facebook}
                          className=" p-2 rounded mb-2"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="carousel-item text-center d-flex justify-content-center  w-100">
              <div
                className="ms-3  card card-integrantes my-5"
                style={{ width: "18rem" }}
              >
                <img
                  src={hernan}
                  className="card-img-top m-auto d-block w-75"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Hernan Dario Zuñiga</h5>
                  <h6  className="font">Full Stack Developer</h6>
                  <ul className="d-flex redes-integrantes justify-content-center">
                    <li>
                      <a className=" bg-yellow wasap" target={"_blank"} href="">
                        <img src={wasap} className=" p-2 rounded mb-2" alt="" />
                      </a>
                    </li>
                    <li>
                      <a className=" bg-yellow instagram" target={"_blank"} href="">
                        <img src={ins} className=" p-2 rounded mb-2" alt="" />
                      </a>
                    </li>
                    <li>
                      <a className=" bg-yellow facebook" target={"_blank"} href="">
                        <img
                          src={facebook}
                          className=" p-2 rounded mb-2"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade2"
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
            data-bs-target="#carouselExampleFade2"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default IntegrantesSlider;
