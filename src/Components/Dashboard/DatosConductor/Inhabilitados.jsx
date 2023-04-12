

import ItemsInhabilitados from "./ItemsInhabilitados";

function Inhabilitados({Inhabilitado}) {
  



  return (
    <>
      <div className="col-12">
        <div className="card my-4">
          <div className="card-header p-0 position-relative pb-3 mt-n4 mx-3 z-index-2">
            <div className="bg-danger shadow-primary border-radius-lg pt-4 pb-3">
              <h4 className="text-light ps-3 mb-2">
                Conductores Inhabilitados
              </h4>
            </div>
          </div>
          <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-2">
                <tbody>
                <ItemsInhabilitados  Inhabilitado={Inhabilitado}/> 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inhabilitados;
