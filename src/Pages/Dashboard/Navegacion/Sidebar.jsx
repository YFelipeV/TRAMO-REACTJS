import { Link, Outlet } from "react-router-dom";
import "../../../css/styleAdmin.css";
import volante from '../../../assets/icons/volante.png';
import campana from '../../../assets/icons/campana.png';
import ruta from '../../../assets/icons/camion.png';
import cliente from '../../../assets/icons/cliente.png';
import historial from '../../../assets/icons/historialNar.png';
import buzon from '../../../assets/icons/buzon.png';

function Sidebar() {
  return (
    <>
      <Outlet />
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link collapsed" to={"/dashboard"}>
              <img src={ruta} className="img-sidebar" alt="" />
              <span className="m-2">Conductores</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to={"solicitudes"}>
              <img src={campana} className="img-sidebar" alt="" />
              <span className="m-2">Solicitudes</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" to={"datosconductores"}>
             <img src={volante} className="img-sidebar" alt="" />
              <span className="m-2">Datos Conductores</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" to={"datoscliente"}>
             <img src={cliente} className="img-sidebar" alt="" />
              <span className="m-2">Datos cliente</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" to={"historial"}>
              <img src={historial} className="img-sidebar" alt="" />
              <span className="m-2">Historial</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" to={"pqrs"}>
              <img src={buzon} className="img-sidebar" alt="" />
              <span className="m-2">P.Q.R.S</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
