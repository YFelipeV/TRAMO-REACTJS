import axios from "axios";

export const loadCondutoresHabilitados = async () => {
  try {
    const response = await axios.get("felipe");
    return response;
  } catch (error) {
    console.log(error)
  }
};
export const loadCondutoresInhabilitados = async () => {
    try {
      const response = await axios.get("felipe");
      return response;
    } catch (error) {
        console.log(error)
    }
  };
