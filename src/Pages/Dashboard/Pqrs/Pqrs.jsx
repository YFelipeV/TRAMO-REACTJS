import { useEffect, useState } from "react";

import { getPqrs } from "../../../Data/Pqrs";
import PqrsCards from "../../../Components/Dashboard/Pqrs/PqrsCards";

function Pqrs() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const loadPqrs = async () => {
      const response = await getPqrs();
      setdata(response);
    };
    loadPqrs();
  }, []);

  console.log(data);
  return (
    <main id="main" className="main">
      {/* tabla 2 */}
      <div className="card my-4">
        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
          <div className="bg-primary shadow-primary border-radius-lg pt-4 pb-3">
            <h4 className="text-light ps-3 ">P-Q-R-S</h4>
          </div>
        </div>
        <div className="card-body px-0 pb-2">
          <div className="table-responsive p-0">
            <table className="table align-items-center mb-0">
              <thead>
                <tr className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  <th>NOMBRE</th>
                  <th>CALIFICACION</th>

                  <th>RESPONDER </th>
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
