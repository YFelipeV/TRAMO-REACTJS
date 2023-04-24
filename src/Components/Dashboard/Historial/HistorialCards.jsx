import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getHistorial } from "../../../Data/Historial";
import Manifiesto from './Manifiesto';

function HistorialCards() {
  const [Historial, setHistorial] = useState([]);

  useEffect(() => {
    async function loadHistorial() {
      const {data} = await getHistorial();
      setHistorial(data);
      
    }

    loadHistorial();
  }, []);
  return (
    <>
      {Historial.map(({ name, id, username, address }) => (
        <tr key={id}>
          <td className="text_movil filas_info_corta text-center p-4">{name}</td>
          <td className="text_movil filas_info_corta text-center pt-4 ">{username}</td>
          <td className="text_movil text-center pt-4">{id} toneladas</td>
          <td className="text_movil filas_info_larga text-center pt-4">{address.street}</td>
          <td className="text_movil  text-center pt-4">${address.geo.lat}</td>
          <td className="text_movil filas_info_corta text-center pt-4">
            
              <Link to={`/manifiesto/${id}`} target="blank"
              >
                <button className="btn bg-orange-btn px-4" style={{fontSize:"14px"}}>
                  Ver manifiesto
                </button>
              </Link>
            
          </td>
        </tr>
      ))}
    </>
  );
}

export default HistorialCards;
