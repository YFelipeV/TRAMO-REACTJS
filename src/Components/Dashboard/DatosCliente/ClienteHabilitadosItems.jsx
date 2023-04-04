import React from "react";
import Cliente from "./Modales/Cliente";

function ClienteHabilitadosItems({ data }) {
  return (
    <>
      {data.map((cliente) => (
        <tr key={cliente._id}>
          <td>
            <p className="font-weight-bold text-xs font-weight-bold m-0 text-danger">
              <b>Cliente Natural</b>
            </p>

            <div>
              <img
                src={cliente.perfil.fotoPerfilPNA}
                alt="Profile"
                className="rounded-circle w-75"
              />
            </div>
          </td>
          <td className="text-center align-middle text-sm">
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              <b>Nombre</b>
            </p>
            <p className="font-weight-bold text-xs font-weight-bold m-0">
              {cliente.nombrePNA} {cliente.apellidoPNA}
            </p>
            <p className="font-weight-bold text-xs font-weight-bold m-0">
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
            <p className="font-weight-bold text-xs font-weight-bold m-0">
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
          </td>
          <td>
            <div className="text-center">
              <div className="mt-5">
                <button
                  className="btn btn-secondary mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#escribir-motivo-inhabilitacion"
                >
                  Inhabilitar
                </button>
              </div>
            </div>
          </td>

          <Cliente idCliente={cliente._id} />
        </tr>
      ))}
    </>
  );
}

export default ClienteHabilitadosItems;
