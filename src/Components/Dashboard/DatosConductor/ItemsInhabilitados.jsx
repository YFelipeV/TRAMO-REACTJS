import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import MotivoInhabilitado from "./Modales/MotivoInhabilitado";
import { CondutoresInhabilitado } from "../../../Data/DatosConductor";
import MasDatosInhabilitado from "./Modales/MasDatosInhabilitado";
import { useConductores } from "../../../Context/Contexto";

function ItemsInhabilitados() {
  const { datosConductorInhabilitado, loading } = useConductores();

  const [data, setdata] = useState([]);
  const [motivo, setMotivo] = useState("");
  const [nombre, setnombre] = useState("");

  const handleOnsumbit = async (id) => {
    const response = await CondutoresInhabilitado(id);
    setdata(response);
  };
  const handleMotivo = (motivoInhabilitadoCON, nombre) => {
    setMotivo(motivoInhabilitadoCON);
    setnombre(nombre);
  };

  return (
    <>
      {loading ? (
        datosConductorInhabilitado.map(({ conductor }) => (
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
                  onClick={() => {
                    handleMotivo(
                      conductor.motivoInhabilitadoCON,
                      conductor.nombreCON,
                      conductor.apellidoCON
                    );
                  }}
                >
                  Ver motivo inhabilitacion
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <div className=" d-flex justify-content-center">
          <span class="loader3"></span>
        </div>
      )}

      <MotivoInhabilitado motivo={motivo} nombre={nombre} />
      <MasDatosInhabilitado data={data} />
    </>
  );
}

export default ItemsInhabilitados;
