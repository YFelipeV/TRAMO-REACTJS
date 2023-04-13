import Minhabilitar from "./Modales/Minhabilitar";
import MasDatos from "./Modales/MasDatos";
import { useState } from "react";
import { loadCondutoresHabilitado } from "../../../Data/DatosConductor";

function ItemsHabilitados({ habilitados }) {
  const [data, setdata] = useState([]);

  const handleOnsumbit = async (id) => {
    const response = await loadCondutoresHabilitado(id);
    setdata(response);
  };

  return (
    <>
      {habilitados.map(({ conductor }) => (
        <>
          <tr key={conductor._id}>
            <td>
              <img
                src={
                  conductor.perfil
                    ? conductor.perfil.fotoperfilCON
                    : "https://profileme.app/wp-content/uploads/2021/01/cropped-ProfileMe-06.jpg"
                }
                className="rounded-circle mx-5  "
                alt=""
                style={{ maxWidth: "110px" }}
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
            <td>
              <div>
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
                <div className="mt-2 border-0 bg-white ">
                  <button
                    className="btn btn-danger mb-2 px-3  "
                    data-bs-toggle="modal"
                    data-bs-target="#escribir-motivo-inhabilitacion"
                  >
                    Inhabilitar
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <Minhabilitar _id={conductor._id} />
          </tr>
        </>
      ))}
      <MasDatos data={data} />
    </>
  );
}

export default ItemsHabilitados;
