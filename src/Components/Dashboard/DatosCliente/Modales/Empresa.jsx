import { useState } from "react";

import Swal from "sweetalert2";
import { InhabilitarEmpresa } from "../../../../Data/DatosCliente";

function Empresa({ _id }) {
  const [data, setdata] = useState({
    _id: _id,
    motivoInhabilitadoPJU: "",
  });

  const handleChange = ({ target }) => {
    setdata({
      ...data,
      [target.name]: target.value,
    });
  };
  return (
    < >
      <div
        className="modal "
        id="motivo-inhabilitacion-o"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Escriba el motivo de la Inhabilitacion
              </h1>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <textarea
                  className="w-100 p-3"
                  placeholder="Motivo Inhabilitación..."
                  name="motivoInhabilitadoPJU"
                  rows="10"
                  onChange={handleChange}
                ></textarea>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center ">
              <button
                type="submit"
                onClick={() => {
                  Swal.fire({
                    title: "¿Seguro que desea Inhabilitar el conductor?",
                    icon: "question",
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
                      button: InhabilitarEmpresa(data);
                    }
                  });
                }}
                className="btn btn-primary w-75"
              >
                Confirmar Rechazo y enviar motivo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Empresa;
