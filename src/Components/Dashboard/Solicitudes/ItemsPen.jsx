import React from 'react'

function ItemsPen({SolicitudesPendientes}) {

  return (
    <>
      {
       
    
      SolicitudesPendientes.map(
        ({
          idConductor,
          nombreCON,
          apellidoCON,
          nroTelefonoCON,
          nroDocumentoCON,
          correoElectronicoCON,
          DireccionResidenciaCON,
          fotoperfilCON
        }) => (
          
            <tr key={idConductor}>
              <td>
                <div className="d-flex justify-content-center aling-items-center ">
                  <img
                    src={fotoperfilCON}
                    alt=""
                    className="rounded-circle fotoperfil  "
                    style={{maxWidth:"90px"}}
                  ></img>
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
                  {DireccionResidenciaCON}
                </p>
              </td>
              <td>
                <div className="text-center" style={{ marginTop: "10%" }}>
                  <a
                    href=""
                    className="m-0 p-0 text-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#mas-datos"
                  >
                    Mostrar mas datos
                  </a>
                  <div className="mt-2 ">
                    <button
                      className="btn btn-primary mb-2 px-4 border-0 mx-2"
                      onClick={() => {
                        Swal.fire({
                          title: "¿Seguro que desea Aceptar la solicitud?",
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
                            // button: updateSolicitudesPendientes(idConductor);
                          }
                        });
                      }}
                    >
                      Aceptar
                    </button>
                    <button
                      className="border-0  "
                     
                    >
                      <a
                        className="btn btn-secondary  px-3  "
                        data-bs-toggle="modal"
                        data-bs-target="#escribir-motivo-rechazo"
                      >
                        Rechazar
                      </a>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          
        )
      )}
      {/* <ModalSolicitudesRechazo/> */}
    </>
  )
}

export default ItemsPen