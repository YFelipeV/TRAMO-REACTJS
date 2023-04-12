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
          fotoPerfilPNA,
          _id,
        }) => (
          <tr key={_id}>
            <td>
              <p className="font-weight-bold text-xs font-weight-bold m-0 text-danger">
                <b>Cliente Empresa</b>
              </p>

              <div>
                <img
                  src={fotoPerfilPNA}
                  alt="Profile"
                  className="rounded-circle w-75"
                />
              </div>
            </td>
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

              <p className="fw-bold">
              Nit:
                
              </p>
              <p className="">{NITempresa}</p>
            </td>
            <td>
              <div className="text-center">
                <div className="mt-4">
                  <button
                    // onClick={() => idPersonal(idPerJuridica)}
                    className="btn btn-danger mb-2  "
                    data-bs-toggle="modal"
                    data-bs-target="#motivo-inhabilitacion-o"
                  >
                    Inhabilitar
                  </button>
                </div>
              </div>
            </td>
            <Empresa _id={_id}/>  
          </tr>
        )
      )}
      
    </>
  );
}

export default EmpresaHabilitadosItems;
