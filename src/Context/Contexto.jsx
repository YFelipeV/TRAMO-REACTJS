import { createContext, useContext, useState } from "react";
import {
  CondutoresHabilitados,
  CondutoresInhabilitados,
} from "../Data/DatosConductor";

export const ServiceContext = createContext();

export const useConductores = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    new Error("error en el context ");
  }
  return context;
};

export const ServiceContextProvider = ({ children }) => {
  const [datosConductor, setDatosConductor] = useState([]);
  const [datosConductorInhabilitado, setDatosConductorInhabilitado] = useState(
    []
  );

  const loadDatosConductorHabilitados = async () => {
    const response = await CondutoresHabilitados();
    setDatosConductor(response);
  };
  const loadDatosConductorInhabilitados = async () => {
    const response = await CondutoresInhabilitados();
    setDatosConductorInhabilitado(response);
  };

  return (
    <ServiceContext.Provider
      value={{
        loadDatosConductorHabilitados,
        datosConductor,
        loadDatosConductorInhabilitados,
        datosConductorInhabilitado,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
