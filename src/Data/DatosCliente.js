import axios from "axios";

export const loadEmpresaHabilitados = async () => {
  try {
    const response = await axios.get(
      "https://backend-tramo-res.vercel.app/admin/datosClientesNaturalHB"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};






export const loadEmpresaInhabilitados = async () => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

{
  /* CLIENTES NATURALES*/
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
export const InhabilitarCliente = async (data) => {
  const { _id, motivoInhabilitadoPNA } = data;
  console.log(data);
  try {
    const response = await axios.put(
      `https://backend-tramo-res.vercel.app/admin/datosClientesNaturalHB/${_id}`,
      { motivoInhabilitadoPNA }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
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
export const habilitarCliente = async (_id) => {
  console.log(_id)
  try {
    const response = await axios.put(
      `https://backend-tramo-res.vercel.app/admin/datosClientesNaturalIN/${_id}`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
