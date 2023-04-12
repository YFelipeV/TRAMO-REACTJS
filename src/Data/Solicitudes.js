 /* SOLICITUDES */
import axios from 'axios';


  /* SOLICITUDES PENDIENTES */


export const getSolicitudesPendientes = async () => {
  try {
    const {data} = await axios.get(
        `https://backend-tramo-res.vercel.app/admin/solicitudesPendiente`,
      );
      console.log(data);
      return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSolicitudesPendientesid = async (id) => {
  try {
    const {data} = await fetch(
        "https://backend-tramo-res.vercel.app/admin/solicitudesPendiente",
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
  const user = {
    idConductor: id,
  };
  const url = `https://tramo.herokuapp.com/admin/aceptarSoli/${user.idConductor}`;
  const data = { idConductor: user.idConductor };

  await fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),

    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

{
  /* SOLICITUDES  ACTUALIZAR RECHAZAR */
}
export const putSolicitudesRechazar = (user) => {
  const url = `https://tramo.herokuapp.com/admin/rechazarSolicitud/${user.idConductor}`;
  const data2 = { motivoRechazoCON: user.motivoRechazoCON };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data2),

    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data2) => {
      console.log(data2);
    })
    .catch((error) => {
      console.log(error);
    });
};

{
  /* SOLICITUDES  RECHAZADAS */
}

export const getSolicitudesRechazadas = async () => {
  const response = await fetch(
    "hhttps://tramo.herokuapp.com/admin/solicitudesRechazadas",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
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
