import axios from "axios";
import Swal from "sweetalert2";

/**
 * |===================================|
 *! |==     DATOS CLIENTE EMPRESA    ==|
 * |===================================|
 */

{
  /!*Datos  cliente  Empresa Habilitados */;
}
export const EmpresasHabilitadas = async () => {
  try {
    const { data } = await axios.get(
      "https://backend-tramo-res.vercel.app/admin/datosClientesEmpresaHB"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

{
  /!*Inhabilitar Empresa  */;
}
export const InhabilitarEmpresa = async (data) => {
  const { _id, motivoInhabilitadoPJU } = data;
  console.log(data);
  try {
    const response = await axios.put(
      `https://backend-tramo-res.vercel.app/admin/datosClientesEmpresaHB/${_id}`,
      { motivoInhabilitadoPJU }
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

{
  /!*Datos  cliente  Empresa Inhabilitados */;
}
export const EmpresasInhabilitadas = async () => {
  try {
    const { data } = await axios.get(
      " https://backend-tramo-res.vercel.app/admin/datosClientesEmpresaIN"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
{
  /!*Habilitar Empresa  */;
}
export const habilitarEmpresa = async (_id) => {
  try {
    const response = await axios.put(
      ` https://backend-tramo-res.vercel.app/admin/datosClientesEmpresaIN/${_id}`
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
/**
 * |===================================|
 *! |==     DATOS CLIENTES NATURAL    ==|
 * |===================================|
 */

{
  /!*Datos  cliente Natural  */;
}
export const loadClienteHabilitados = async () => {
  try {
    const { data } = await axios.get(
      "https://backend-tramo-res.vercel.app/admin/datosClientesNaturalHB"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

{
  /!*Inhabilitar  cliente Natural  */;
}
export const InhabilitarCliente = async (motivoInhabilitadoPNA,getid) => {
  
 
 

  try {
    const response = await axios.put(
      `https://backend-tramo-res.vercel.app/admin/datosClientesNaturalHB/${getid}`,
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

{
  /!*Datos de los clientes Inhabilitados */;
}
export const loadClienteInhabilitados = async () => {
  try {
    const { data } = await axios.get(
      "https://backend-tramo-res.vercel.app/admin/datosClientesNaturalIN"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

{
  /!*Habilitar Cliente Natural */;
}
export const habilitarCliente = async (_id) => {
  try {
    const response = await axios.put(
      `https://backend-tramo-res.vercel.app/admin/datosClientesNaturalIN/${_id}`
    );
    console.log(response);
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
