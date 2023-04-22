import HistorialCards from "../../../Components/Dashboard/Historial/HistorialCards";
import img_emp from "../../../assets/icons/historial.png";

function Historial() {
  return (
    <>
      <main className="main" id="main">
        <div className="card my-4">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="bg-blue-head head-title shadow-primary border-radius-lg">
              <h4 className="text-light ps-3 ">
              <img className='imagen-titulo' src={img_emp} alt="" style={{width:"32px", opacity:"90%"}} />
                Historial de Viajes
              </h4>
            </div>
          </div>
          <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    <th style={{fontSize:"14px"}}>CONDUCTOR</th>
                    <th style={{fontSize:"14px"}}>PASAJERO</th>
                    <th style={{fontSize:"14px"}}>CANTIDAD </th>
                    <th style={{fontSize:"14px"}}>ESPECIFICACIONES </th>
                    <th style={{fontSize:"14px"}}>VALOR</th>
                    <th style={{fontSize:"14px"}}>MANIFIESTO</th>
                  </tr>
                </thead>
                <tbody>
                  <HistorialCards />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Historial;
