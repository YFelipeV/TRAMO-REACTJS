import axios from "axios";
import Swal from "sweetalert2";

export const authUsuario = async () => {
  try {
    const response = await axios.post("", user);

    if (user && response.data) {
      Swal.fire({
        icon: "success",
        text: response.data,
      });
    }
  } catch (error) {
    if (error.response.data) {
      Swal.fire({
        icon: "error",
        text: response.data,
      });
    }
  }
};
