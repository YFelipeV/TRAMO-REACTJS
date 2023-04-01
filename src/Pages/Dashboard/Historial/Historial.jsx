import React from 'react'
import Historial from '../../../Components/Dashboard/Historial';

function Historial() {
  return (
    <>
    
      <main className="main" id="main">
        <div className="card my-4">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="bg-primary shadow-primary border-radius-lg pt-4 pb-3">
              <h4 className="text-light ps-3 ">
                Historial de Viajes
              </h4>
            </div>
          </div>
          <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    <th>CONDUCTOR</th>
                    <th>PASAJERO</th>
                    <th>CANTIDAD </th>
                    <th>ESPECIFICACIONES </th>
                    <th>VALOR</th>
                    <th>MANIFIESTO</th>
                  </tr>
                </thead>
                <tbody>
                  <Historial/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Historial