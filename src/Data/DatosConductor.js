import axios from "axios";

export const loadCondutoresHabilitados = async () => {
  try {
    const response = await axios.get("felipe");
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const loadCondutoresInhabilitados = async () => {
  try {
    const response = await axios.get("felipe");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const InhabilitarConductor = async (data) => {
  try {
    const response = await axios.put(
      `https://backend-tramo-res.vercel.app/admin/datosClientesNaturalHB/${data.id}`,
      data.motivoInhabilitadoPNA
    );
    console.log(response)
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const HabilitarConductor = async (data) => {
  try {
    const response = await axios.put("felipe", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
