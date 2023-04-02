function Items({ data }) {
  
  return (
    <>
     {
      data.map(
        (conductor) => (
          <tr key={conductor._id}>
            <td>
              <div className="d-flex justify-content-center">
                <img
                  src={conductor.perfil.fotoperfilCON}
                  className="rounded-circle"
                  width="50%"
                ></img>
              </div>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {conductor.nombreCON} {conductor.apellidoCON}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <span className="font-weight-bold text-xs font-weight-bold">
                {conductor.nroTelefonoCON}
              </span>
            </td>
            <td className="text-center align-middle text-sm">
              
               {conductor.calificacionCON == 5
                ? "⭐⭐⭐⭐⭐"
                : conductor.calificacionCON == 4
                ? "⭐⭐⭐⭐"
                : conductor.calificacionCON == 3
                ? "⭐⭐⭐"
                : conductor.calificacionCON == 2
                ? "⭐⭐"
                : conductor.calificacionCON == 1
                ? "⭐"
                : "0"} 
            </td>

            <td className="text-center align-middle">
              <span
                className={
                  conductor.estadoCON.disponibilidadCON == 1
                  ? "badge badge-sm bg-success"
                  : "badge badge-sm bg-primary"
                }
              >
                {conductor.estadoCON.disponibilidadCON == 1 ? "Disponible" : " En Servicio"}
              </span>
            </td>
          </tr>
        )
      )}
    </>
  );
}

export default Items;
