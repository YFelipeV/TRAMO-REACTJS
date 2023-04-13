import React from "react";
import Empresa from "../Modales/Empresa";

function EmpresaHabilitadosItems({ data }) {
  return (
    <>
      {data.map(
        ({
          nombreEmpresa,
          nroTelefonoPJU,
          correoElectronicoPJU,
          DireccionEmpresa,
          calificacionPJU,
          NITempresa,
          razonSocialEmpresa,
          nomRepresentanteLegal,

          _id,
        }) => (
          <>
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
                <p className="font-weight-bold text-xs font-weight-bold m-0">
                  ⭐⭐⭐⭐⭐
                </p>

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

              <td className="align-middle">
                <div className="text-center">
                  <div className="mt-4">
                    <button
                      className="btn btn-danger mb-2  "
                      data-bs-toggle="modal"
                      data-bs-target="#motivo-inhabilitacion-o"
                    >
                      Inhabilitar
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-none bg-white">
              <td className="bg-white">
               
              <Empresa _id={_id} />
              </td>
              
            </tr>
          </>
        )
      )}
    </>
  );
}

export default EmpresaHabilitadosItems;
