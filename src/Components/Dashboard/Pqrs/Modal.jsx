import React from "react";
import { useState } from "react";

function Modal() {
  const [data, setdata] = useState("");
  return (
    <tr>
      <td>
        <div
          className="modal fade"
          id="peticion"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="mas-datosLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="mas-datosLabel">
                  Motivo P-Q-R-S{" "}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* {data.motivoRechazoCON} */}
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate laborum, ab odit maiores quidem numquam facere non
                  autem, omnis eligendi quo reiciendis suscipit nulla officiis
                  accusantium? Officiis voluptas culpa tempore.lorem Lorem
                </p>

                <textarea
                  name=""
                  id=""
                  cols="55"
                  rows="10"
                  className="p-2 w-100"
                  placeholder="Escribe La Respuesta..."
                  onChange={(e) => setdata(e.target.value)}
                ></textarea>
                <button className="btn btn-primary w-100 my-1">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default Modal;
