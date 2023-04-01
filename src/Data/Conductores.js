import axios from 'axios';

    /* CONDUCTORES  DISPONIBLE*/
export const getConductoresDisponibles = async () => {
    const response = await axios.get(
      "https://tramo.herokuapp.com/admin/conductoresDis");
  
    return response;
  };
  
  {
    /* CONDUCTORES  SERVICIO*/
  }
  
  export const getConductoresServicio = async () => {
    const response = await axios.get(
      "https://tramo.herokuapp.com/admin/conductoresEnServicio");
  
    return response;
  };