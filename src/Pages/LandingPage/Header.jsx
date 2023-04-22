import logo from "../../assets/icons/horizontal.jpg";
import Footer from "./Footer";
import "../../css/style.css";
import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <header>
        <nav
          className="navbar d-flex navbar-expand-lg nav-menu navbar-light fixed-top pt-2 bg-white"
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
              onClick={handleMenuClick}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
                <li className="nav-item">
                  <Link
                   
                    className="nav-link mx-2 fw-medium active fs-5 text-primary"
                    aria-current="page"
                    to="/"
                    onClick={handleLinkClick}
                  >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    
                    className="nav-link mx-2 fw-medium fs-5 text-primary"
                    to="about"
                    onClick={handleLinkClick}
                  >
                    Acerca de Nosotros
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    
                    className="nav-link fw-medium fs-5 mx-2 text-primary"
                    to="contactos"
                    onClick={handleLinkClick}
                  >
                    Contactos
                  </Link>
                </li>
              </ul>
              <div className="ps-lg-5">
                <Link
                  to={"/login"}
                  className="btn btn-lg btn-primary rounded-pill mx-1 order-0 fs-5 me-5"
                >
                  Inicio Sesion
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Suspense
        fallback={
          <section className="mt-5 p-5">
            <div className="d-flex justify-content-center mt-5 align-content-center">
            <span class="loader"></span>
           
            </div>
            <div className="text-center">
            <span className="loader1 "></span>
            </div>
          </section>
        }
      >
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
}

export default Header;
