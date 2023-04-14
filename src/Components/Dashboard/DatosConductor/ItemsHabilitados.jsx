import Minhabilitar from "./Modales/Minhabilitar";
import MasDatos from "./Modales/MasDatos";
import { useState } from "react";
import {
  CondutoresHabilitado,
  CondutoresInhabilitado,
} from "../../../Data/DatosConductor";
import { useConductores } from "../../../Context/Contexto";

function ItemsHabilitados() {
  const { datosConductor } = useConductores();
  const [data, setdata] = useState([]);
  const [getid, setgetid] = useState(0);

  const handleOnsumbit = async (id) => {
    setgetid(id)
    const response = await CondutoresHabilitado(id);
    setdata(response);
  };

  return (
    <>
      {datosConductor.map(({ conductor }) => (
        
          <tr key={conductor._id}>
            <td>
              <img
                src={
                  conductor.perfil
                    ? conductor.perfil.fotoperfilCON
                    : "https://profileme.app/wp-content/uploads/2021/01/cropped-ProfileMe-06.jpg"
                }
                className="circle-img m-2 "
                alt=""
              />
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {conductor.nombreCON} {conductor.apellidoCON}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>N° Telefono</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {conductor.nroTelefonoCON}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Cedula</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {conductor.nroDocumentoCON}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Correo</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {conductor.correoElectronicoCON}
              </p>
            </td>
            <td className="text-center align-middle">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Direccion de residencia</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {conductor.DireccionResidenciaCON}
              </p>
            </td>
            <td className="align-middle">
              <div className="text-center " style={{ marginTop: "10%" }}>
                <button
                  className="m-0 p-0 text-primary bg-white border-0 mr-2  "
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => handleOnsumbit(conductor._id)}
                >
                  Mostrar mas datos
                </button>
              </div>
              {/* <div className="mt-2 border-0 bg-white ">
                  <button
                    className="btn btn-danger mb-2 px-3  "
                    data-bs-toggle="modal"
                    data-bs-target="#escribir-motivo-inhabilitacion"
                  >
                    Inhabilitar
                  </button>
                </div> */}
            </td>
          </tr>
          
        
      ))}
      <Minhabilitar getid={getid} />
     
      <MasDatos data={data} />
    </>
  );
}

export default ItemsHabilitados;
