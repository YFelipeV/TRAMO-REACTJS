import { useEffect, useState } from "react";
import { getConductoresServicio } from "../../../Data/Conductores";
import Items from "./Items";
import Head from "./Head";

function Servicio() {
  const { ConductorServicio, setConductorServicio } = useState([]);

  const subTitulos = ["perfil", "nombre", "telefono", "calificacion", "estado"];

  useEffect(() => {
    async function loadConductoresServicio() {
        let response = await getConductoresServicio();
        setConductorServicio(response);
        console.log(response);
      }

    loadConductoresServicio();
  },[]);
  
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card-body px-0 pb-2">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h4 className="text-light ps-3">Conductores en Servicio</h4>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <Head subTitulos={subTitulos} />
                      </tr>
                    </thead>
                    <tbody>
                      <Items data={ConductorServicio} />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicio;
