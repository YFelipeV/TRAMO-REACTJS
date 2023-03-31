


import fondo from "../assets/ilustraciones/fondo.jpg";
import ilu1 from "../assets/ilustraciones/ilustracionabout1.svg";
import ilu2 from "../assets/ilustraciones/ilustracion2.svg";
import ilu3 from "../assets/ilustraciones/ilustracion3.svg";
import IntegrantesSlider from "./IntegrantesSlider";
import IntegrantesSliderGrande from "./IntegrantesSliderGrande";

function About() {
  return (
    <>
      
      <section id="container" className="font">
        <div className="mt-6">
          <img className=" mt-2 img-fluid imagen" src={fondo} alt=""></img>
          <div className="mt-3 d-flex justify-content-center flex-column container w-md-75">
            <h6 className="text-center fs-2 mt-5 dark fw-bold">Acerca de Nosotros</h6>
            <div className="w-100 d-flex justify-content-center">
              <p className="text-center text-justify mt-4 fs-5 font text-secondary w-sm-100 w-md-75 ">
                TRAMO es una aplicación que busca conectar de forma más fácil y
                segura a las personas que requieren de un servicio de transporte
                de carga para sus productos, No solamente con enfoque en las
                ciudades, sino que también en el campo, debido a que en el
                departamento del Cauca cerca del 60% de la población pertenece a
                zonas rurales.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* fin section */}

      {/* mision */}
      <section className="py-3 font">
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-5 text-center text-md-start order-1">
              <img
                className="img-fluid mb-4"
                src={ilu1}
                width="650"
                alt=""
              ></img>
            </div>
            <div className="col-md-6 text-center text-md-start offset-md-1 order-2">
              <h6 className="fw-bold fs-2 lh-sm text-sm-center text-md-start dark">
                Mision
                <br />
              </h6>
              <p className="my-4 pe-xl-5 fon text-justify fs-5  text-secondary">
                Nuestra empresa, está enfocada en mejorar la agilidad al
                solicitar un servicio de transporte de carga en el departamento
                del Cauca, vinculando el sector transporte para impulsar su
                economía del sector.
              </p>{" "}
            </div>
          </div>
        </div>
      </section>
      {/* fin section */}

      {/* vision */}
      <section className="py-6 font my-5">
        <div className="container">
          <div className="row  text-md-start offset-md-1">
            <div className="col-sm-12 col-md-6 order-sm-3 order-md-1 text-center text-md-start">
              <h6 className="fw-bold fs-2  X f lh-sm mt-5  text-sm-center text-md-start dark">
                Vision
              </h6>

              <p className="my-5 pe-xl-4  text-justify fs-5 text-secondary">
                En cinco años queremos visualizarnos como una de los mejores
                aplicativos a nivel nacional y también como una de las mejores
                empresas emprendedoras del país.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 order-md-2 order-sm-2  text-center">
              <img
                className=" img-fluid w-lg-75"
                src={ilu2}
                width="350"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </section>
      {/* fin section */}

      {/* Obejtivo principal */}
      <section className="font mt-5 py-5 ">
        <div className="container">
          <div className="row text-md-start offset-md-1">
            <div className="col-sm-12 col-md-6  order-sm-2  order-md-1 d-flex justify-content-center align-items-start justify-content-md-start ">
              <img
                className="img-fluid mt-3 m-md-0 w-sm-100 w-md-75  "
                src={ilu3}
                alt=""
                style={{ maxWidth: "390px" }}
              ></img>
            </div>

            <div className="col-sm-12 col-md-6 order-sm-0 order-md-2  text-center text-md-start">
              <h6 className="mb-4 dark fw-bold  fs-2">Objetivo Principal</h6>
              <p className="fon text-justify fs-5  text-secondary ">
                El enfoque de TRAMO es cambiar el método tradicional de
                solicitar un servicio de carga, brindando mayor confianza a
                nuestros usuarios, campesinos y comerciantes. Así, antes de
                aceptar un servicio sabrán a quién están contratando, si tiene
                buenas recomendaciones y sobre todo sabrá el precio que le
                costará ese flete. El usuario no tendrá que regatear con el
                conductor porque todos los precios estarán regulados de acuerdo
                al trayecto y la cantidad de carga.
              </p>
            </div>
          </div>
        </div>
      </section>
      <IntegrantesSliderGrande/>
      <IntegrantesSlider />
     
    </>
  );
}

export default About;
