import axios from 'axios';

    /* CONDUCTORES  DISPONIBLE*/
export const getConductoresDisponibles = async () => {
   try {
    const {data} = await axios.get(
      "https://backend-tramo-res.vercel.app/admin/conductoresDis");
    return data;

   } catch (error) {
    console.log(error);
   }
  };
  
  {
    /* CONDUCTORES  SERVICIO*/
  }
  
  export const getConductoresServicio = async () => {
    try {
      const {data} = await axios.get(
        "https://backend-tramo-res.vercel.app/admin/conductoresEnServicio");
      return data;
    } catch (error) {
      console.log(error);
    }
  };