import React from "react";

function ClienteInhabilitadosItems() {
  return (
    <>
      {DatosClienteInhabilitados.map(
        ({
          idPerNatural,
          nombrePNA,
          apellidoPNA,
          nroTelefonoPNA,
          correoElectronicoPNA,
          DireccionPNA,
          calificacionPNA,
          fotoPerfilPNA,
        }) => (
          <tr key={idPerNatural}>
            <td>
              <p className="font-weight-bold text-xs font-weight-bold m-0 text-danger">
                <b>Cliente Natural</b>
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
                <button
                  className="border-0  bg-white"
                  onClick={() => loadDatosClienteNaturalId(idPerNatural)}
                >
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
                      puthabilitarDatosClienteNatural(idPerNatural)
                    }
                    className="btn btn-primary mb-2"
                  >
                    Habilitar
                  </button>
                </div>
              </div>
            </td>
          </tr>
        )
      )}
      <ModalDatosClienteMotivoInha />
    </>
  );
}

export default ClienteInhabilitadosItems;
