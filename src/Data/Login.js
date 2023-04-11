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

export const authUsuarios = async ({ correoAdmin, passwordAdmin },navigate) => {
 
  try {
    const response = await axios.post(
      "https://tramo.herokuapp.com/auth",
      { correoAdmin, passwordAdmin }
    );
    console.log(response);

    if (response.status === 200 && response.data) {
      Swal.fire({
        title: response.data.message,
        icon: "success",
        timer: 1500,
      }).then(() => {
        // Almacenar el token en una variable o estado
        const authToken = response.data.token;
        localStorage.setItem("token", authToken);

        console.log(authToken);
        // Llamar la función para obtener los datos protegidos usando el token como argumento
        
        // Redireccionar a la ruta
        navigate("/dashboard");
      });
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};
