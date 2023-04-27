import axios from "axios";
import Swal from "sweetalert2";
export const CondutoresHabilitados = async () => {
  try {
    const { data } = await axios.get(
      "https://backend-tramo-res.vercel.app/admin/conductoresHabilitados"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const CondutoresHabilitado = async (id) => {
  try {
    const { data } = await axios.get(
      `https://backend-tramo-res.vercel.app/admin/conductoresHabilitados/${id}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const CondutoresInhabilitados = async () => {
  try {
    const { data } = await axios.get(
      "https://backend-tramo-res.vercel.app/admin/conductoresInhabilitados"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const CondutoresInhabilitado = async (id) => {
  try {
    const { data } = await axios.get(
      `https://backend-tramo-res.vercel.app/admin/conductoresInhabilitados/${id}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const InhabilitarConductor = async (motivoInhabilitadoCON, getid) => {
  try {
    const response = await axios.put(
      `https://backend-tramo-res.vercel.app/admin/inhabilitarConductor/${getid}`,
      { motivoInhabilitadoCON }
    );

    if (response.status === 200) {
      location.reload();
      return response;
    }
  } catch (error) {
    if (error.response.data) {
      Swal.fire({
        icon: "error",
        title: response.data,
      });
    }
  }
};
export const HabilitarConductor = async (_id) => {
  try {
    const response = await axios.put(
      `https://backend-tramo-res.vercel.app/admin/habilitarConductor/${_id}`
    );
    if (response.status === 200) {
      location.reload();
      return response;
    }
  } catch (error) {
    if (error.response.data) {
      Swal.fire({
        icon: "error",
        title: response.data,
      });
    }
  }
};
