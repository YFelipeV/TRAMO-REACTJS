import axios from "axios";
import Swal from "sweetalert2";

/* SOLICITUDES */

/* SOLICITUDES PENDIENTES */

export const getSolicitudesPendientes = async () => {
  try {
    const { data } = await axios.get(
      `https://backend-tramo-res.vercel.app/admin/solicitudesPendiente`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSolicitudesPendientesid = async (id) => {
  try {
    const { data } = await fetch(
      "https://backend-tramo-res.vercel.app/admin/solicitudesPendiente"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

{
  /* SOLICITUDES  ACTUALIZAR */
}

export const updateSolicitudesPendientes = async (id) => {
  try {
    const user = {
      idConductor: id,
    };
    const url = `https://backend-tramo-res.vercel.app/admin/aceptarSoli/:id/${user.idConductor}`;
    const data = { idConductor: user.idConductor };

    await axios
      .put(url, {})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    return data;
  } catch (error) {
    console.log(error);
  }
};

{
  /* SOLICITUDES  ACTUALIZAR RECHAZAR */
}
export const putSolicitudesRechazar = async (data) => {
  const { _id, motivoRechazoCON } = data;
  console.log(data);
  try {
    const response = await axios.put(
      `https://backend-tramo-res.vercel.app/admin/rechazarSolicitud/${_id}`,
      { motivoRechazoCON }
    );
    console.log(response);

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
  console.log(data);
  return data;
};

{
  /* SOLICITUDES  RECHAZADAS ID */
}
export const getSolicitudesRechazadasid = async (id) => {
  const response = await fetch(
    `https://tramo.herokuapp.com/admin/solicitudesRechazadas/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
  return data;
};
