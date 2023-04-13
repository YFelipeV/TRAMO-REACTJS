import React from "react";
import Cliente from "../Modales/Cliente";

function ClienteHabilitadosItems({ data }) {
  return (
    <>
      {data.map((cliente) => (
        <>
          <tr key={cliente._id}>
            <td>
              <img
                src={
                  cliente.perfil
                    ? cliente.perfil.fotoPerfilPNA
                    : "https://profileme.app/wp-content/uploads/2021/01/cropped-ProfileMe-06.jpg"
                }
                className="rounded-circle mx-5   "
                alt=""
                style={{ maxWidth: "110px" }}
              />
            </td>

            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {cliente.nombrePNA} {cliente.apellidoPNA}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0 mt-2">
                <b>N° Telefono</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {cliente.nroTelefonoPNA}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Correo</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {cliente.correoElectronicoPNA}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0 mt-2">
                <b>Direccion</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {cliente.DireccionPNA}
              </p>
            </td>
            <td className="text-center align-middle">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Calificacion {cliente.calificacionPNA}</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                ⭐⭐⭐⭐⭐
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0 mt-2">
                <b>Documento</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {cliente.nroDocumentoPNA}
              </p>
            </td>
            <td>
              <div className="text-center">
                <div className="mt-5">
                  <button
                    className="btn btn-danger mb-2"
                    data-bs-toggle="modal"
                    data-bs-target="#escribir-motivo-inhabilitacion"
                  >
                    Inhabilitar
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            {" "}
            <Cliente idCliente={cliente._id} />
          </tr>
        </>
      ))}
    </>
  );
}

export default ClienteHabilitadosItems;
