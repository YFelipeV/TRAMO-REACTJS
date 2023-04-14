import axios from "axios";
import Swal from "sweetalert2";

/* SOLICITUDES */

/* SOLICITUDES PENDIENTES */

export const getSolicitudesPendientes = async () => {
  try {
    const { data } = await axios.get(
      `https://backend-tramo-res.vercel.app/admin/solicitudesPendiente`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
/* SOLICITUDES PENDIENTES ID*/

export const getSolicitudesPendientesid = async (id) => {
  try {
    const { data } = await axios.get(
      `https://backend-tramo-res.vercel.app/admin/solicitudesPendiente/${id}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

{
  /* SOLICITUDES  ACTUALIZAR */
}

export const updateSolicitudesPendientes = async (_id) => {
  try {
    const response = await axios.put(
        `https://backend-tramo-res.vercel.app/admin/aceptarSoli/${_id}`);
      if (response.status === 200) {
        return response;
      }
  } catch (error) {
    console.log(error);
  }
};

{
  /* SOLICITUDES  ACTUALIZAR RECHAZAR */
}
export const putSolicitudesRechazar = async (data) => {
  const { _id, motivoRechazoCON } = data;
  try {
    const response = await axios.put(
      `https://backend-tramo-res.vercel.app/admin/rechazarSolicitud/${_id}`,
      { motivoRechazoCON }
    );
    if (response.status === 200) {
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

{
  /* SOLICITUDES  RECHAZADAS */
}

export const getSolicitudesRechazadas = async () => {
  const { data } = await axios.get(
    "https://backend-tramo-res.vercel.app/admin/solicitudesRechazadas"
  );
  return data;
};

{
  /* SOLICITUDES  RECHAZADAS ID */
}

export const getSolicitudesRechazadasid = async (id) => {
  try {
    const { data } = await axios.get(
      `https://backend-tramo-res.vercel.app/admin/solicitudesRechazadas/${id}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
