import axios from "axios";

export const loadCondutoresHabilitados = async () => {
  try {
    const {data} = await axios.get(
      "https://backend-tramo-res.vercel.app/admin/conductoresHabilitados"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const loadCondutoresInhabilitados = async () => {
  try {
    const {data} = await axios.get(
      "https://backend-tramo-res.vercel.app/admin/conductoresInhabilitados"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const InhabilitarConductor = async (data) => {
  try {
    const { _id, motivoInhabilitadoPNA } = data;
    const response = await axios.put(
      `https://backend-tramo-res.vercel.app/admin/inhabilitarConductor/${_id}`,
      { motivoInhabilitadoPNA }
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
