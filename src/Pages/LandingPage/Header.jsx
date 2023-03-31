import logo from "../assets/icons/horizontal.jpg";
import Footer from "./Footer";
import "../css/style.css";
import { Link, Outlet } from "react-router-dom";


function Header() {
  return (
    <>
      <header>
        <nav
          className="navbar d-flex navbar-expand-lg navbar-light fixed-top pt-2 bg-white"
          data-navbar-on-scroll="data-navbar-on-scroll"
        >
          <div className="container-fluid">
            <Link
              className=" w-sm-100 w-md-25 logonav position-md-absolute left-md-5"
              to="/"
            >
              <img
                src={logo}
                alt=""
                className="position-md-relative w-sm-100 w-md-75"
              ></img>
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse mt-4 mt-lg-0"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link mx-2 fw-medium active fs-5 text-primary"
                    aria-current="page"
                    to="/"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link mx-2 fw-medium fs-5 text-primary"
                    to="about"
                  >
                    Acerca de Nosotros
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link
                    className="nav-link fw-medium fs-5 text-primary"
                    to="contactos"
                  >
                    Contactos
                  </Link>
                </li>
              </ul>
              <div className="ps-lg-5">
                <Link
                  to={"/login"}
                  className="btn btn-lg btn-primary rounded-pill order-0 fs-5 me-5"
                >
                  Inicio Sesion
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export default Header;
