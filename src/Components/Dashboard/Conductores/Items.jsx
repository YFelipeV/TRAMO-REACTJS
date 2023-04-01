import { Navigate } from "react-router-dom";


function Items({ data }) {
  

 
  return (
    <>
     {
      data.map(
        ({
          idConductor,
          nombreCON,
          nroTelefonoCON,
          calificacionCON,
          disponibilidadCON,
        }) => (
          <tr key={idConductor}>
            <td>
              <div className="d-flex justify-content-center">
                <img
                  src={`https://robohash.org/user${idConductor}`}
                  className="rounded-circle"
                  width="50%"
                ></img>
              </div>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nombreCON}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <span className="font-weight-bold text-xs font-weight-bold">
                {nroTelefonoCON}
              </span>
            </td>
            <td className="text-center align-middle text-sm">
              
              {/* {calificacionCON == 5
                ? "⭐⭐⭐⭐⭐"
                : calificacionCON == 4
                ? "⭐⭐⭐⭐"
                : calificacionCON == 3
                ? "⭐⭐⭐"
                : calificacionCON == 2
                ? "⭐⭐"
                : calificacionCON == 1
                ? "⭐"
                : "0"} */}
            </td>

            <td className="text-center align-middle">
              <span
                className={
                  disponibilidadCON == 1
                    ? "badge badge-sm bg-success"
                    : "badge badge-sm bg-primary"
                }
              >
                {disponibilidadCON == 1 ? "Disponible" : " En Servicio"}
              </span>
            </td>
          </tr>
        )
      )}
    </>
  );
}

export default Items;
