import { useEffect, useState } from "react";

import { getPqrs } from "../../../Data/Pqrs";
import PqrsCards from "../../../Components/Dashboard/Pqrs/PqrsCards";
import { useParams } from "react-router-dom";
import img_pen from '../../../assets/icons/buzon.png';

function Pqrs() {
  const [data, setdata] = useState([]);
  const{id}=useParams()

  useEffect(() => {
    const loadPqrs = async () => {
      const response = await getPqrs();
      setdata(response);
    };
    loadPqrs();
  }, []);

  
  return (
    <main id="main" className="main">
      {/* tabla 2 */}
      <div className="card my-4">
        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          <div className="bg-blue-head head-title shadow-primary border-radius-lg">
            <h4 className="text-light d-flex align-items-center"><img className='imagen-titulo me-3' src={img_pen} alt="" style={{width:"32px", opacity:"90%"}} />P-Q-R-S</h4>
          </div>
        </div>
        <div className="card-body px-0 pb-2">
          <div className="table-responsive p-0">
            <table className="table align-items-center mb-0">
              <thead>
                <tr className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  <th style={{fontSize:"15px"}}>NOMBRE</th>
                  <th style={{fontSize:"15px"}}>CALIFICACION</th>

                  <th style={{fontSize:"15px"}}>RESPONDER </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <PqrsCards data={data} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Pqrs;
