import React from 'react'
import Swal from 'sweetalert2';
import { updateSolicitudesPendientes } from '../../../Data/Solicitudes';
import MotivoRechazo from './Modales/MotivoRechazo';
function ItemsPen({SolicitudesPendientes}) {
    console.log(SolicitudesPendientes);
  return (
    <>
      {  SolicitudesPendientes.map(
        ({conductor}) => (
          <>
            <tr key={conductor._id}>
              <td>
                <div className="d-flex justify-content-center aling-items-center ">
                    <img src={conductor.perfil.fotoperfilCON}   style={{maxWidth:"90px"}}  className="rounded-circle fotoperfil  " alt="" />
                  
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
                  {conductor.DireccionResidenciaCON}
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
                            button: updateSolicitudesPendientes(conductor._id);
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
            <tr>
            <MotivoRechazo _id={conductor._id}/>
            </tr>
        </>
        )
      )}
    </>
  )
}

export default ItemsPen