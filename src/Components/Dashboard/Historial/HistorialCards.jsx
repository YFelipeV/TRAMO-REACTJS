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
          <td className="text-center p-4">{name}</td>
          <td className="text-center pt-4 ">{username}</td>
          <td className="text-center pt-4">{id} toneladas</td>
          <td className="text-center pt-4">{address.street}</td>
          <td className="text-center pt-4">${address.geo.lat}</td>
          <td className="text-center pt-4">
            <div className="manifiesto ">
              <Link to={`/manifiesto/${id}`} target="blank" className="text-danger"
              >
                Ver manifiesto
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default HistorialCards;
