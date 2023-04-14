import ReactStarts from 'react-stars'
function Items({ data }) {
  
  return (
    <>
     {
      data.map(
        ({conductor}) => (
          <tr key={conductor._id}>
            <td>
              <div className="d-flex justify-content-center">
              <img
                src={conductor.perfil.fotoperfilCON}
                  className="circle-img"
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
              <div className='d-flex justify-content-center'>
              <ReactStarts  edit={false}  value={conductor.calificacionCON}  size={28} /> 
              </div>
              
      
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
