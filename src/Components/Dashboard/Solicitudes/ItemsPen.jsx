import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  getSolicitudesPendientesid,
  updateSolicitudesPendientes,
} from "../../../Data/Solicitudes";
import MotivoRechazo from "./Modales/MotivoRechazo";
import MasDatos from "./Modales/MasDatos";
function ItemsPen({ SolicitudesPendientes }) {
  const [data, setdata] = useState([]);

  const handleOnsumbit = async (id) => {
    const response = await getSolicitudesPendientesid(id);
    setdata(response);
  };
  console.log(data);

  return (
    <>
      {SolicitudesPendientes.map(({ conductor }) => (
        <>
          <tr key={conductor._id}>
            <td>
              <div className="d-flex justify-content-center aling-items-center ">
                <img
                  src={conductor.perfil.fotoperfilCON}
                  className="circle-img"
                  alt=""
                />
              </div>
            </td>
            <td className="text-center align-middle text-sm w-25">
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
            <td className="text-center align-middle w-25">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Direccion de residencia</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {conductor.DireccionResidenciaCON}
              </p>
            </td>
            <td >
              <div
                className=""
                style={{marginTop:"35px"}}
                data-bs-toggle="modal"
                data-bs-target="#mas-datos"
                onClick={() => handleOnsumbit(conductor._id)}
              >
                <button className="btn bg-blue btn-mas-datos">Mostrar Más Datos</button>
              </div>
            </td>
          </tr>
          <tr>
            <MotivoRechazo _id={conductor._id} />
          </tr>
          <MasDatos data={data} />
        </>
      ))}
    </>
  );
}

export default ItemsPen;
