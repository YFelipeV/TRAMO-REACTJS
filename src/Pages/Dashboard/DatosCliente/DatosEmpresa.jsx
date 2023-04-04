import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmpresaHabilitados from "../../../Components/Dashboard/DatosCliente/EmpresaHabilitados";
import EmpresaInhabilitados from "../../../Components/Dashboard/DatosCliente/EmpresaInhabilitados";
import { EmpresasHabilitadas, EmpresasInhabilitadas } from "../../../Data/DatosCliente";

function DatosEmpresa() {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [inhabilitados, setInhabilitados] = useState([]);

  useEffect(() => {

    const loadEmpresaHabilitados = async () => {
      const response = await EmpresasHabilitadas();
      setdata(response);
    };

    const loadEmpresaInhabilitados = async () => {
      const response = await EmpresasInhabilitadas();
      setInhabilitados(response);
    };

    loadEmpresaInhabilitados();
    loadEmpresaHabilitados();
  }, []);
  console.log(data)

  return (
    <>
      <main id="main" className="main">
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success mx-2"
            type="submit"
            onClick={() => {
              navigate("/dashboard/datoscliente");
            }}
          >
            Ver Cliente Naturalñ
          </button>
          <button
            className="btn btn-primary mx-2"
            type="submit"
            onClick={() => {
              navigate("/dashboard/datosclienteEmpresa");
            }}
          >
            Ver Cliente Empresa
          </button>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h4 className="text-light ps-3">Clientes Habilitados</h4>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <EmpresaHabilitados data={data} />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <EmpresaInhabilitados  data={inhabilitados}/> */}
      </main>
    </>
  );
}

export default DatosEmpresa;
