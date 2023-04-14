import React, { useState } from "react";
import { habilitarCliente } from "../../../../Data/DatosCliente";
import Swal from "sweetalert2";
import ClienteMotivo from "../Modales/ClienteMotivo";
import ReactStarts from 'react-stars'


function ClienteInhabilitadosItems({ ClienteInhabilitado }) {
  const [motivo, setmotivo] = useState("");
  
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
              <div>
                {/* <img
                  src={perfil.fotoPerfilPNA}
                  alt="Profile"
                  style={{ width: "65%" }}
                  className="rounded-circle "
                /> */}
                <img
                  src={
                    perfil
                      ? perfil.fotoPerfilPNA
                      : "https://profileme.app/wp-content/uploads/2021/01/cropped-ProfileMe-06.jpg"
                  }
                  className="circle-img    "
                  alt=""
                  
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
                <b>Calificacion {calificacionPNA}</b>
              </p>
             <div className="d-flex justify-content-center">
              <ReactStarts  edit={false}  value={calificacionPNA}  size={28} /> 
              </div>
              
              <p className="font-weight-bold text-xs font-weight-bold m-0"></p>
            </td>
            <td>
              <div className="text-center mt-4">
                <div className="border-0  bg-white">
                  <button
                    href=""
                    className="m-0 p-0 text-danger bg-white border-0"
                    data-bs-toggle="modal"
                    data-bs-target="#motivo-inhabilitacion"
                    onClick={() => setmotivo(estadoCLN.motivoInhabilitadoPNA)}
                  >
                    Ver motivo inhabilitacion
                  </button>
                </div>
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
          </tr>
         
        )
      )}
       
    
      <ClienteMotivo motivo={motivo} />
    </>
  );
}

export default ClienteInhabilitadosItems;
