import React, { useState } from "react";
import Swal from "sweetalert2";
import MotivoInhabilitado from "./Modales/MotivoInhabilitado";
import {
  CondutoresInhabilitado,
  HabilitarConductor,
} from "../../../Data/DatosConductor";
import MasDatosInhabilitado from "./Modales/MasDatosInhabilitado";
import { useConductores } from "../../../Context/Contexto";

function ItemsInhabilitados() {
  const { datosConductorInhabilitado } = useConductores();

  const [data, setdata] = useState([]);
  const [motivo, setMotivo] = useState("");

  const handleOnsumbit = async (id) => {
    const response = await CondutoresInhabilitado(id);
    setdata(response);
  };
  const handleMotivo = (motivoInhabilitadoCON) => {
    setMotivo(motivoInhabilitadoCON);
  };

  return (
    <>
      {datosConductorInhabilitado.map(({ conductor }) => (
        <tr key={conductor._id}>
          <td>
            <div>
              <img
                src={conductor.perfil.fotoperfilCON}
                className="circle-img  m-2 "
                alt=""
               
              />
            </div>
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
              {conductor.DireccionResidenciaCON} 78N - Popayan Cauca
            </p>
          </td>
          <td className="align-middle ">
            <div className="text-center" style={{ marginTop: "10%" }}>
              <a
                href=""
                className="m-0 p-0 text-primary"
                data-bs-toggle="modal"
                data-bs-target="#inhabilitado"
                onClick={() => handleOnsumbit(conductor._id)}
              >
                Mostrar mas datos
              </a>
              <br />
              <button
                className="m-0 p-0 text-danger bg-white border-0 mr-2  "
                data-bs-toggle="modal"
                data-bs-target="#motivo-rechazo"
                onClick={() => handleMotivo(conductor.motivoInhabilitadoCON)}
              >
                Ver motivo inhabilitacion
              </button>
              {/* <div className="mt-2">
                <button
                  className="btn btn-primary mb-2"
                  onClick={() => {
                    Swal.fire({
                      title: "¿Seguro que desea habilitar el Conductor?",
                      icon: "question",
                      html: `<p>${conductor.nombreCON} ${conductor.apellidoCON}</p>`,
                      showDenyButton: true,
                      denyButtonText: "No",
                      confirmButtonText: "Si",
                    }).then((response) => {
                      if (response.isConfirmed) {
                        Swal.fire({
                          icon: "success",
                          title: "Habilitado Correctamente",
                        });
                        button: HabilitarConductor(conductor._id);
                      }
                    });
                  }}
                >
                  Habilitar
                </button>
              </div> */}
            </div>
          </td>
        </tr>
      ))}
      <MotivoInhabilitado motivo={motivo} />
      <MasDatosInhabilitado data={data} />
    </>
  );
}

export default ItemsInhabilitados;
