import logo from "../../../assets/icons/Logofin.png";
import ministerio from "../../../assets/icons/ministerio.png";
import codigo from "../../../assets/icons/codigo.png";
import "./manifiesto.css";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import { useEffect } from "react";

function Manifiesto() {
  const { id } = useParams();
  useEffect(() => {
    const imprimir = () => {
      window.print();
    };
    imprimir();
  }, []);

  return (
    <>
      <div className="p-3 Manifiesto ">
        <table>
          <tr>
            <td colSpan={2}>
              <img src={logo} alt="" style={{ maxWidth: "120px" }} />
              <img src={ministerio} alt="" style={{ maxWidth: "140px" }} />
            </td>
            <td colSpan={3} className="text-center titulo">
              <tr>
                <p className="fw-bold">MANIFIESTO ELECTRONICO DE CARGA</p>
              </tr>
              <tr>
                <h3 className="fw-bold fs-4">TRAMO S.A.S</h3>
              </tr>
              <tr>
                <p>NIT: 7457239240945</p>
              </tr>
              <tr>
                <p>Crra 4#7-65 Popayan Cauca</p>
              </tr>
            </td>
            <td rowSpan={5} colSpan={2}>
              <tr>
                <p className="texto-largo">
                  "La impresión en soporte cartular (papel) de este acto
                  administrativo producido por medios electrónicos en
                  cumplimiento de la ley 627 de 1999 (Artículos 6 y 13) de la
                  ley 962 de 205 (Artículo 6), es una reproducción del documento
                  original que se encuentra en formato electrónico firmado
                  digitalmente, cuya representación digital goza de
                  autenticidad, integridad y no repudio"
                </p>
              </tr>
              <tr>
                <p>
                  <span className="subtitulos">Manifiesto:</span> 02822374
                </p>
              </tr>
              <tr>
                <p>
                  <span className="subtitulos">Autorización:</span> 02822374
                </p>
              </tr>
            </td>
            <td rowSpan={7} className="d-flex justify-content-center ">
              {/* <img src={codigo} alt="" style={{ maxWidth: "120px" }} /> */}
              <div
                style={{
                  height: "auto",
                  margin: "0 auto",
                  maxWidth: "120px",
                  width: "100%",
                }}
              >
                <QRCode
                  value={`https://tramo.vercel.app/manifiesto/${id} `}
                  style={{ maxWidth: "120px" }}
                />
              </div>
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>

          <tr></tr>
          <tr className="subtitulos text-center">
            <td className="bordes">
              <p>FECHA DE EXPEDICIÓN</p>
            </td>
            <td className="bordes" colSpan={2}>
              <p>TIPO DE MANIFIESTO</p>
            </td>
            <td className="bordes" colSpan={2}>
              <p>ORIGEN DEL VIAJE</p>
            </td>
            <td className="bordes" colSpan={2}>
              <p>DESTINO DEL VIAJE</p>
            </td>
          </tr>

          <tr className="text-center">
            <td className="bordes">
              <p>06/05/2022</p>
            </td>
            <td className="bordes" colSpan={2}>
              <p>GENERAL</p>
            </td>
            <td className="bordes" colSpan={2}>
              <p>Popayan-Cauca</p>
            </td>
            <td className="bordes" colSpan={2}>
              <p>El Tambo-Cauca</p>
            </td>
          </tr>
          <tr className="bordes">
            <td colSpan={8} className="text-center subtitulos">
              <p>INFORMACIÓN DEL VEHICULO Y CONDUCTOR</p>
            </td>
          </tr>
          <tr className="bordes subtitulos">
            <td colSpan={2}>
              <p>TITULAR DE MINIFIESTO</p>
            </td>
            <td>
              <p> INDENTIFICACIÓN</p>
            </td>
            <td colSpan={3}>
              <p>DIRECCIÓN</p>
            </td>
            <td>
              <p>TELEFONO</p>
            </td>
            <td>
              <p>CIUDAD</p>
            </td>
          </tr>

          <tr className="bordes">
            <td colSpan={2}>
              <p> FRANCISCO FERNANDO PEREZ</p>
            </td>
            <td>
              <p> 1059355806</p>
            </td>
            <td colSpan={3}>
              <p> CALLE 07 79 A-58</p>
            </td>
            <td>
              <p> 320 7699 9910</p>
            </td>
            <td>
              <p> POPÁYAN-CAUCA</p>
            </td>
          </tr>
          <tr className="bordes subtitulos">
            <td>
              <p>PLACA</p>
            </td>
            <td>
              <p>MARCA</p>
            </td>
            <td>
              <p>PLACA SEMIREMOLQUE</p>
            </td>
            <td>
              <p>CONFIGURACIÓN</p>
            </td>
            <td>
              <p>PESO VACIO</p>
            </td>
            <td>
              <p>N° DE POLIZA</p>
            </td>
            <td>
              <p>COMPAÑIA DE SOAT</p>
            </td>
            <td>
              <p>FECHA VENCIMIENTO SOAT</p>
            </td>
          </tr>

          <tr className="bordes">
            <td>
              <p>FGR75C</p>
            </td>
            <td>
              <p>CHEVROLET</p>
            </td>
            <td>
              <p>676 S</p>
            </td>
            <td>
              <p>2</p>
            </td>
            <td>
              <p>4000KG</p>
            </td>
            <td>
              <p>545454545454544</p>
            </td>
            <td>
              <p>SEGURO DE ESTADO</p>
            </td>
            <td>
              <p>12/02/2025</p>
            </td>
          </tr>
          <tr className="bordes subtitulos">
            <td colSpan={2}>
              <p>CONDUCTOR</p>
            </td>
            <td>
              <p>INDENTIFICACIÓN</p>
            </td>
            <td colSpan={2}>
              <p>DIRECCIÓN</p>
            </td>
            <td>
              <p>N° TELÉFONO</p>
            </td>
            <td>
              <p>N° DE LICENCIA</p>
            </td>
            <td>
              <p>CIUDAD</p>
            </td>
          </tr>

          <tr className="bordes">
            <td colSpan={2}>
              <p>CARLOS HERNESTO MARTINEZ</p>
            </td>
            <td>
              <p>100234569</p>
            </td>
            <td colSpan={2}>
              <p>CRA 79 A-58</p>
            </td>
            <td>
              <p>320 452 8976</p>
            </td>
            <td>
              <p>11511245</p>
            </td>
            <td>
              <p>POPÁYAN-CAUCA</p>
            </td>
          </tr>
          <tr className="bordes subtitulos">
            <td colSpan="2">
              <p>POSEEDOR O TENEDOR VEHICULO</p>
            </td>
            <td>
              <p>INDENTIFICACIÓN</p>
            </td>
            <td colSpan="2">
              <p>DIRECCIÓN CONDUCTOR N°2</p>
            </td>
            <td>
              <p>N° TELÉFONO</p>
            </td>
            <td colSpan="2">
              <p>CIUDAD</p>
            </td>
          </tr>
          <tr className="bordes">
            <td colSpan="2">
              <p>CARLOS HERNESTO MARTINEZ</p>
            </td>
            <td>
              <p>100234569</p>
            </td>
            <td colSpan="2">
              <p>CRA 79 A-58</p>
            </td>
            <td>
              <p>320 452 8976</p>
            </td>
            <td colSpan="2">
              <p>POPÁYAN-CAUCA</p>
            </td>
          </tr>
          <tr className="bordes subtitulos">
            <td colSpan={8}>
              <p>INFORMACIÓN DE LA MERCACANCÍA TRANSPORTADA</p>
            </td>
          </tr>

          <tr className="bordes subtitulos">
            <td colSpan={5}>
              <p>INFORMACIÓN MERCACANCÍA</p>
            </td>
            <td>
              <p>INFORMACIÓN REMITENTE</p>
            </td>
            <td>
              <p>INFORMACIÓN DESTINATARIO</p>
            </td>
            <td rowSpan={2}>
              <p>DUEÑO POLIZA</p>
            </td>
          </tr>

          <tr className="bordes subtitulos">
            <td>
              <p>N° REMEZA</p>
            </td>
            <td>
              <p>UNIDAD DE MEDIDA</p>
            </td>
            <td>
              <p>CANTIDAD</p>
            </td>
            <td>
              <p>NATURALEZA</p>
            </td>
            <td>
              <p>EMPAQUE-PRODUCTO TRANSPORTADO</p>
            </td>
            <td>
              <p>CC/NIT NOMBRE/RAZÓN SOCIAL</p>
            </td>
            <td>
              <p>CC/NIT NOMBRE/RAZÓN SOCIAL</p>
            </td>
          </tr>
          <tr className="bordes">
            <td>
              <p>a4268</p>
            </td>
            <td>
              <p>KILOGRAMOS</p>
            </td>
            <td>
              <p>1000</p>
            </td>
            <td>
              <p>CARGA NORMAL</p>
            </td>
            <td>
              <p>PAQUETE-HIERROS Y ACERO</p>
            </td>
            <td>
              <p>0234567892 Ferro Maquinas S.A.S</p>
            </td>
            <td>
              <p>0245484464 Maquinas Cauca S.A.S</p>
            </td>
            <td>
              <p>TRAMO S.A.S</p>
            </td>
          </tr>
          <tr className="bordes subtitulos">
            <td colSpan={6}>
              <p>VALORES</p>
            </td>
            <td colSpan={2}>
              <p>OBSERVACIONES</p>
            </td>
          </tr>
          <tr className="bordes">
            <td>
              <p className="subtitulos">VALOR TOTAL DEL VIAJE</p>
            </td>
            <td>
              <p>649,456</p>
            </td>
            <td rowSpan={2}>
              <p className="subtitulos">LUGAR</p>
            </td>
            <td rowSpan={2}>
              <p>POPAYAN</p>
            </td>
            <td rowSpan={2}>
              <p className="subtitulos">FECHA</p>
            </td>
            <td rowSpan={2}>
              <p>02/09/2022</p>
            </td>
            <td colSpan={2} rowSpan={6}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                repudiandae et quae dolores qui iste nemo, aperiam veritatis
                dicta voluptatibus distinctio expedita voluptatum cum temporibus
                saepe maiores? Doloremque, inventore reprehenderit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                doloribus dolorum explicabo non molestias ex animi nostrum illum
                sint optio. Quisquam officiis perferendis ipsum reiciendis
                officia fuga nam, asperiores ut.
              </p>
            </td>
          </tr>
          <tr className="bordes">
            <td>
              <p className="subtitulos">RETENCIÓN EN LA FUENTE</p>
            </td>
            <td>
              <p>6,456</p>
            </td>
          </tr>

          <tr className="bordes">
            <td>
              <p className="subtitulos">RETENCIÓN ICA</p>
            </td>
            <td>
              <p>0</p>
            </td>
            <td colSpan={4} rowSpan={2}>
              <p className="subtitulos">CARGO PAGADO POR:</p> <p>REMITENTE</p>
            </td>
          </tr>

          <tr className="bordes">
            <td>
              <p className="subtitulos">NETO A PAGAR</p>
            </td>
            <td>
              <p>655,912</p>
            </td>
          </tr>

          <tr className="bordes">
            <td>
              <p className="subtitulos">VALOR ANTICIPO</p>
            </td>
            <td>
              <p>0</p>
            </td>
            <td colSpan={4} rowSpan={2}>
              <p className="subtitulos">CARGO PAGADO POR:</p>{" "}
              <p>DESTINATARIO</p>
            </td>
          </tr>

          <tr className="bordes">
            <td>
              <p className="subtitulos">SALDO A PAGAR</p>
            </td>
            <td>
              <p>655,912</p>
            </td>
          </tr>

          <tr className="bordes">
            <td colSpan={8}>
              <p>
                <span className="subtitulos my-1">
                  VALOR A PAGAR EN LETRAS:
                </span>{" "}
                SEISCIENTOS CINCUENTA Y CINCO MIL NOVECIENTOS DOCE PESOS M/C
              </p>
            </td>
          </tr>

          <tr
            className="bordes subtitulos"
            style={{ height: "80px" }}
            valign="top"
          >
            <td colSpan={3}>
              <p>DOCUMENTO FIRMADO DIGITALMENTE POR LA EMPRESA:</p>{" "}
              <p>TRAMO S.A.S</p>
            </td>
            <td colSpan={3}>
              <p>FIRMA Y HUELLA TITULAR MANIFIESTO</p>
            </td>
            <td colSpan={3}>
              <p>FIRMA Y HUELLA DEL CONDUCTOR</p>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Manifiesto;
