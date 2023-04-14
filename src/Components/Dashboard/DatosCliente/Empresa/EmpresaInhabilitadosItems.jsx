import { useState } from "react";
import { habilitarEmpresa } from "../../../../Data/DatosCliente";
import EmpresaMotivo from "../Modales/EmpresaMotivo";
import Swal from "sweetalert2";
import ReactStarts from 'react-stars'

function EmpresaInhabilitadosItems({ inhabilitados }) {
  const [motivo, setmotivo] = useState("");
  return (
    <>
      {inhabilitados.map(
        ({
          nombreEmpresa,
          nroTelefonoPJU,
          correoElectronicoPJU,
          DireccionEmpresa,
          calificacionPJU,
          nomRepresentanteLegal,
          NITempresa,
          razonSocialEmpresa,
          estadoPJU,
          _id,
        }) => (
          <tr key={_id}>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre Empresa</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nombreEmpresa}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>N° Telefono</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nroTelefonoPJU}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Correo</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {correoElectronicoPJU}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Direccion</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {DireccionEmpresa}
              </p>
            </td>
            <td className="text-center align-middle">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Calificacion {calificacionPJU}</b>
              </p>
              <div className="d-flex justify-content-center">
              <ReactStarts  edit={false}  value={calificacionPJU}  size={28} /> 
              </div>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nit </b>
              </p>
              <p className="">{NITempresa}</p>
            </td>
            <td className="align-middle">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Razon Social </b>
              </p>
              <p>{razonSocialEmpresa}</p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Representante Legal </b>
              </p>
              <p>{nomRepresentanteLegal}</p>
            </td>
            <td>
              <div className="text-center mt-4">
                <div className="border-0 bg-white">
                  <button
                    className="m-0 p-0 text-danger bg-white border-0"
                    data-bs-toggle="modal"
                    data-bs-target="#motivo-inhabilitacion-empresa"
                    onClick={() => setmotivo(estadoPJU.motivoInhabilitadoPJU)}
                  >
                    Ver motivo inhabilitacion
                  </button>
                </div>
                <div className="mt-2">
                  <button
                    className="btn btn-primary mb-2"
                    onClick={() => {
                      Swal.fire({
                        title: `¿Está seguro de habilitar el cliente ${nombreEmpresa} ? `,

                        icon: "warning",
                        showDenyButton: true,
                        denyButtonText: "Cancelar",
                        confirmButtonText: "Si, Habilitar!",
                      }).then((response) => {
                        if (response.isConfirmed) {
                          habilitarEmpresa(_id);
                        }
                      });
                    }}
                  >
                    Habilitar
                  </button>
                </div>
              </div>
            </td>
          </tr>
        )
      )}
      <EmpresaMotivo motivo={motivo} />
    </>
  );
}

export default EmpresaInhabilitadosItems;
