import { Link, Outlet } from "react-router-dom";
import "../../../css/styleAdmin.css";

function Sidebar() {
  return (
    <>
      <Outlet />
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link collapsed" to={"/dashboard"}>
              <i className="bx bi-card-heading"></i>
              <span className="m-2">conductores</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to={"solicitudes"}>
              <i className="bx bi-card-heading"></i>
              <span className="m-2">Solicitudes</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" to={"datosconductores"}>
              <i className="bx bi-card-heading"></i>
              <span className="m-2">Datos Conductores</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" to={"datoscliente"}>
              <i className="bx bi-card-heading"></i>
              <span className="m-2">Datos cliente</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" to={"historial"}>
              <i className="bx bi-card-heading"></i>
              <span className="m-2">Historial</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" to={"pqrs"}>
              <i className="bx bi-card-heading"></i>
              <span className="m-2">P.Q.R.S</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
