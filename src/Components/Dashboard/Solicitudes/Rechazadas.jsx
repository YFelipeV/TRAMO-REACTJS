import React, { useEffect, useState } from 'react'
import ItemsRec from './ItemsRec';
import img_rec from '../../../assets/icons/rechazado.png';
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
            <div className="bg-orange shadow-primary border-radius-lg">
              <h4 className="text-light head-title d-flex align-items-center"> <img className='imagen-titulo' src={img_rec} alt=""/> Solicitudes Rechazadas</h4>
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