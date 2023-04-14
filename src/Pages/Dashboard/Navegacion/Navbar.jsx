import Sidebar from "./Sidebar";
import logo from "../../../assets/icons/horizontal.jpg";
import "../../../css/styleAdmin.css";
import profile from "../../../assets/icons/profile.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate()
  const [openMenu, setOpenSidebar] = useState(false);

  function openSidebar() {
    setOpenSidebar(true);
    if (openMenu == true) {
      document.querySelector("body").classList.toggle("toggle-sidebar");
    }
  }
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center "
      >
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/dashboard" className="me-3">
            <img src={logo} alt="logo_tramo" width="230px"></img>
          </Link>

          <button className="border-0 bg-white" onClick={() => openSidebar()}>
            <i className="i bi-list toggle-sidebar-btn"></i>
          </button>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src={profile}
                  alt="Profile"
                  className="rounded-circle"
                ></img>

                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {/* {decodedToken.name} */}
                  felipe
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li>
                  <button className="dropdown-item d-flex align-items-center" onClick={()=>{
                    localStorage.clear()
                    return navigate("/")
                    
                    
                    }}>
                    <i className="bi bi-box-arrow-right"></i>
                    
                    Cerrar Sesion
                  </button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <Sidebar />
    </>
  );
}

export default Navbar;
