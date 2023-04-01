import React from 'react'

function EmpresaInhabilitadosItems() {
  return (
    <>
    {DatosclienteInhabilitadosEmpresa.map(
        ({
          nombreEmpresa,
          nroTelefonoPJU,
          correoElectronicoPJU,
          DireccionEmpresa,
          calificacionPJU,
          NITempresa,
          fotoPerfilPNA,
          idPerJuridica
        }) => (
          <tr key={idPerJuridica}>
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
              <p>
                nit
                {NITempresa}
              </p>
            </td>
            <td>
            <div className="text-center mt-4">
                <button className="border-0 bg-white"
                onClick={()=>loadDatosClienteEmpresalId(idPerJuridica)}>
                 
                <a
                
                href=""
                className="m-0 p-0 text-danger"
                data-bs-toggle="modal"
                data-bs-target="#motivo-inhabilitacion-empresa"
                >
                  Ver motivo inhabilitacion
                </a>
                  </button>
                <div className="mt-2">
                  <button onClick={()=>putHabilitarDatosClienteEmpresa(idPerJuridica)} className="btn btn-primary mb-2">Habilitar</button>
                </div>
              </div>
            </td>
          
          </tr>
        )
      )}
      <ModalDatosClienteEmpresaMotivo/>
      
    </>
  )
}

export default EmpresaInhabilitadosItems