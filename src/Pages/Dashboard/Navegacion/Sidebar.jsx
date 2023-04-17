import { Outlet } from "react-router-dom";
import SidebarLinks from "./SidebarLinks";
import "../../../css/styleAdmin.css";

function Sidebar() {
  return (
    <>
    <Outlet />
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <SidebarLinks goingTo={"/dashboard"} children={"conductores"} />
          <SidebarLinks goingTo={"solicitudes"} children={"Solicitudes"} />
          <SidebarLinks
            goingTo={"datosconductores"}
            children={"Datos Conductores"}
          />
          <SidebarLinks goingTo={"datoscliente"} children={"Datos cliente"} />
          <SidebarLinks goingTo={"historial"} children={"Historial"} />
          <SidebarLinks goingTo={"pqrs"} children={"P.Q.R.S"} />
        </ul>

        <span></span>
      </aside>
    </>
  );
}

export default Sidebar;
