import React, { useEffect, useState } from "react";
import Habilitados from "../../../Components/Dashboard/DatosConductor/Habilitados";
import Inhabilitados from "../../../Components/Dashboard/DatosConductor/Inhabilitados";
import {
  loadCondutoresHabilitados,
  loadCondutoresInhabilitados,
} from "../../../Data/DatosConductor";

function DatosConductores() {
  const [habilitados, setHabilitado] = useState([]);
  const [Inhabilitado, setInhabilitado] = useState([]);
  useEffect(() => {
    const loadConductor = async () => {
      const response = await loadCondutoresHabilitados();

      setHabilitado(response);
    };
    const ConductorInhabilitado = async () => {
      const response = await loadCondutoresInhabilitados();

      setInhabilitado(response);
    };
    loadConductor();

    ConductorInhabilitado();
  }, []);

  return (
    <main className="main" id="main">
      <Habilitados  habilitados={habilitados} />

      {/* {tabla dos} */}
      <Inhabilitados Inhabilitado={Inhabilitado} />
    </main>
  );
}

export default DatosConductores;
