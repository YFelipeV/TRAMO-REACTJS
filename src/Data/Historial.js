
// HISTORIAL 

import axios from "axios";

  
  export const getHistorial = async () => {
    const response = axios.get("https://jsonplaceholder.typicode.com/users");
    return response;
  };