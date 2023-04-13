import axios from "axios";
import Swal from "sweetalert2";
export const loadCondutoresHabilitados = async () => {
  try {
    const { data } = await axios.get(
      "https://backend-tramo-res.vercel.app/admin/conductoresHabilitados"
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const loadCondutoresHabilitado = async (id) => {
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
export const loadCondutoresInhabilitados = async () => {
  try {
    const { data } = await axios.get(
      "https://backend-tramo-res.vercel.app/admin/conductoresInhabilitados"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const loadCondutoresInhabilitado = async (id) => {
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

export const InhabilitarConductor = async (data) => {
  try {
    const { _id, motivoInhabilitadoCON } = data;

    const response = await axios.put(
      `https://backend-tramo-res.vercel.app/admin/inhabilitarConductor/${_id}`,
      { motivoInhabilitadoCON }
    );

    if (response.status === 200) {
      location.reload()
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
