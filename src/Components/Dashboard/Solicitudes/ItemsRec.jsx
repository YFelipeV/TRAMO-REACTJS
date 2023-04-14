import React, { useState } from "react";
import MostrarMotivoRec from "./Modales/MostrarMotivoRec";
import MasDatosRec from "./Modales/MasDatosRec";
import { getSolicitudesRechazadasid } from "../../../Data/Solicitudes";

function ItemsRec({ SolicitudesRechazadas }) {
  const [motivoRechazoCON, setMotivoRechazoCON] = useState("")

  const [data, setdata] = useState([]);

  const handleOnsumbit = async (id) => {
    const response = await getSolicitudesRechazadasid(id);
    setdata(response);
  };
  console.log(data);
  return (
    <>
      {SolicitudesRechazadas.map(({conductor}) => (
        <tr key={conductor._id}>
          <td>
            <span className="d-flex justify-content-center">
              <img
                src={conductor.perfil.fotoperfilCON}
                alt=""
                className="rounded-circle"
                style={{ maxWidth: "90px" }}
              />
            </span>
          </td>
          <td className="text-center align-middle text-sm">
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              <b>Nombre</b>
            </p>
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              {conductor.nombreCON}
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
            <div className="text-center" style={{ marginTop: "10%" }}>
              <a
                href=""
                className="m-0 p-0 text-primary"
                data-bs-toggle="modal"
                data-bs-target="#mas-datos-rechazados"
                onClick={() => handleOnsumbit(conductor._id)}
              >
                Mostrar mas datos
              </a>
              <div className="mt-2">
                <a
                  className=" px-3 text-danger d-flex"
                  data-bs-toggle="modal"
                  data-bs-target="#motivo-rechazo"
                  onClick={()=>setMotivoRechazoCON(conductor.motivoRechazoCON)}
                >
                  Motivo de rechazo
                </a>
              </div>
            </div>
          </td>
          <MostrarMotivoRec motivoRechazoCON={motivoRechazoCON}/>
        </tr>
      ))}
      <MasDatosRec data={data}/>
    </>
  );
}

export default ItemsRec;
