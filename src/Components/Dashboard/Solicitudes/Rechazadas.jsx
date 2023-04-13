import React, { useEffect, useState } from 'react'
import ItemsRec from './ItemsRec';
import { getSolicitudesRechazadas } from '../../../Data/Solicitudes';

function Solicitudes() {
  const [SolicitudesRechazadas, setSolicitudesRechazadas ] = useState([]);

  useEffect(()=>{
    const loadSolicitudesRechazadas = async ()=> {
      let response = await getSolicitudesRechazadas();
      setSolicitudesRechazadas(response);
      console.log(response);
    }

    loadSolicitudesRechazadas()
  },[])
  return (
    <>
      <div className="col-12">
        <div className="card my-4">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="bg-danger shadow-primary border-radius-lg pt-4 pb-3">
              <h4 className="text-light ps-3">Solicitudes Rechazadas</h4>
            </div>
          </div>
          <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <ItemsRec SolicitudesRechazadas={SolicitudesRechazadas}/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Solicitudes