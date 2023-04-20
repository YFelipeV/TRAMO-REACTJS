import React, { useState } from "react";
import MostrarMotivoRec from "./Modales/MostrarMotivoRec";
import MasDatosRec from "./Modales/MasDatosRec";
import { getSolicitudesRechazadasid } from "../../../Data/Solicitudes";

function ItemsRec({ SolicitudesRechazadas }) {
  const [motivoRechazoCON, setMotivoRechazoCON] = useState("")
  const [nombreCON, setNombreCON] = useState("")
  const [apellidoCON, setapellidoCON] = useState("")

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
                className="circle-img"
              />
            </span>
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
            <div className="d-flex flex-md-column align-items-center" style={{ marginTop: "10%" }}>
              <div
                href=""
                className="m-0 p-0 text-primary"
                data-bs-toggle="modal"
                data-bs-target="#mas-datos-rechazados"
                onClick={() => handleOnsumbit(conductor._id)}
              >
                Mostrar mas datos
              </div>
              <div className="mt-2">
                <div
                  className=" px-3 text-danger d-flex"
                  data-bs-toggle="modal"
                  data-bs-target="#motivo-rechazo"
                  onClick={() => {
                    setMotivoRechazoCON(conductor.motivoRechazoCON);
                    setNombreCON(conductor.nombreCON);
                    setapellidoCON(conductor.apellidoCON);
                  }}
                >
                  Motivo de rechazo
                </div>
              </div>
            </div>
          </td>
          <MostrarMotivoRec motivoRechazoCON={motivoRechazoCON} nombreCON={nombreCON} apellidoCON={apellidoCON}/>
        </tr>
      ))}
      <MasDatosRec data={data}/>
    </>
  );
}

export default ItemsRec;
