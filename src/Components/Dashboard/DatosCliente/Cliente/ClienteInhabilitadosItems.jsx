import React from "react";
import { habilitarCliente } from "../../../../Data/DatosCliente";
import Swal from "sweetalert2";
import ClienteMotivo from "../Modales/ClienteMotivo";

function ClienteInhabilitadosItems({ ClienteInhabilitado }) {
  return (
    <>
      {ClienteInhabilitado.map(
        ({
          _id,
          perfil,
          nombrePNA,
          apellidoPNA,
          nroTelefonoPNA,
          correoElectronicoPNA,
          DireccionPNA,
          calificacionPNA,
          estadoCLN,
        }) => (
          <tr key={_id}>
            <td>
              <p className="font-weight-bold text-xs font-weight-bold m-0 text-danger">
                <b>Cliente Natural</b>
              </p>

              <div>
                <img
                  src={perfil.fotoPerfilPNA}
                  alt="Profile"
                  style={{ width: "65%" }}
                  className="rounded-circle "
                />
              </div>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre </b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nombrePNA} {apellidoPNA}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>N° Telefono</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nroTelefonoPNA}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Correo</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {correoElectronicoPNA}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Direccion</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {DireccionPNA}
              </p>
            </td>
            <td className="text-center align-middle">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Calificacion{calificacionPNA}</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                ⭐⭐⭐⭐⭐
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0"></p>
            </td>
            <td>
              <div className="text-center mt-4">
                <button className="border-0  bg-white">
                  <a
                    href=""
                    className="m-0 p-0 text-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#motivo-inhabilitacion"
                  >
                    Ver motivo inhabilitacion
                  </a>
                </button>
                <div className="mt-2">
                  <button
                    onClick={() =>
                      Swal.fire({
                        icon: "question",
                        title: "Esta seguro que desea habilitar este cliente",
                        showDenyButton: true,
                        denyButtonText: "No",
                        confirmButtonText: "Si",
                      }).then((response) => {
                        if (response.isConfirmed) {
                          Swal.fire({
                            icon: "success",
                            title: "Inhabilitado Correctamente",
                            timer: "2000",
                          });
                          button: habilitarCliente(_id);
                        }
                      })
                    }
                    className="btn btn-primary mb-2"
                  >
                    Habilitar
                  </button>
                </div>
              </div>
            </td>
            <ClienteMotivo data={estadoCLN.motivoInhabilitadoPNA} />
          </tr>
        )
      )}
    </>
  );
}

export default ClienteInhabilitadosItems;