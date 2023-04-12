import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmpresaHabilitados from "../../../Components/Dashboard/DatosCliente/Empresa/EmpresaHabilitados";
import EmpresaInhabilitados from "../../../Components/Dashboard/DatosCliente/Empresa/EmpresaInhabilitados";
import {
  EmpresasHabilitadas,
  EmpresasInhabilitadas,
} from "../../../Data/DatosCliente";

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
            Ver Cliente Natural
          </button>
          <button
            className="btn btn-primary mx-2"
            type="submit"
            onClick={() => {
              navigate("/dashboard/datosclienteempresa");
            }}
          >
            Ver Cliente Empresa
          </button>
        </div>

        <EmpresaHabilitados data={data} />

        <EmpresaInhabilitados inhabilitados={inhabilitados} />
      </main>
    </>
  );
}

export default DatosEmpresa;
