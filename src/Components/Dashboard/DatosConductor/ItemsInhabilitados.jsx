import React from "react";
import MotivoInhabilitado from "./Modales/MotivoInhabilitado";

function ItemsInhabilitados() {
  return (
    <>
      {DatosConductorInhabilitados.map(
        ({
          idConductor,
          nombreCON,
          apellidoCON,
          nroTelefonoCON,
          nroDocumentoCON,
          correoElectronicoCON,
          DireccionResidenciaCON,
          fotoperfilCON,
        }) => (
          <tr key={idConductor}>
            <td>
              <div>
                <img
                  src={fotoperfilCON}
                  className="rounded-circle w-75"
                  alt=""
                  style={{ maxWidth: "110px" }}
                />
              </div>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nombreCON} {apellidoCON}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>N° Telefono</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nroTelefonoCON}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Cedula</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nroDocumentoCON}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Correo</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {correoElectronicoCON}
              </p>
            </td>
            <td className="text-center align-middle">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Direccion de residencia</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {DireccionResidenciaCON} 78N - Popayan Cauca
              </p>
            </td>
            <td>
              <div className="text-center" style={{ marginTop: "10%" }}>
                <a
                  href=""
                  className="m-0 p-0 text-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Mostrar mas datos
                </a>
                <br />
                <button
                  className="m-0 p-0 text-danger border-0 bg-white"
                  data-bs-toggle="modal"
                  data-bs-target="#motivo-rechazo"
                  onClick={() => loadDatosConductorId(idConductor)}
                >
                  Ver motivo inhabilitacion
                </button>
                <div className="mt-2">
                  <button
                    className="btn btn-primary mb-2"
                    onClick={() => {
                      Swal.fire({
                        title: "¿Seguro que desea habilitar el Conductor?",
                        icon: "question",
                        html: `<p>${nombreCON} ${apellidoCON}</p>`,
                        showDenyButton: true,
                        denyButtonText: "No",
                        confirmButtonText: "Si",
                      }).then((response) => {
                        if (response.isConfirmed) {
                          Swal.fire({
                            icon: "success",
                            title: "Habilitado Correctamente",
                          });
                          button: putHabilitarDatosConductor(idConductor);
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
      <MotivoInhabilitado />
    </>
  );
}

export default ItemsInhabilitados;
