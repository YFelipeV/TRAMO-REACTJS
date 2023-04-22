import logo from "../assets/icons/horizontal.jpg";
import login from "../assets/ilustraciones/login.gif";
import { useNavigate } from "react-router-dom";
import "../css/styleAdmin.css";
import { useState } from "react";
import { authUsuarios } from "../Data/Login";

function Login() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    correo: "",
    contrasena: "",
  });

  const handleInputChange = ({ target }) => {
    setdata({
      ...data,
      [target.name]: target.value,
    });
  };

  function handle(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="fondo p-1 " style={{ minHeight: "100vh" }}>
        <div className="container h-100 justify-content-center d-flex container-login col-xl-10 align-items-center d-flex p-5">
         
              <div className="card rounded-3 text-black">
                <div className="row  ">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <a href="/">
                          <img
                            src={logo}
                            style={{ width: "97%", marginBottom: "17%" }}
                            className="logo-empresa"
                            alt="logo"
                          />
                        </a>
                      </div>
                      {/* <h4 className="mb-4">Iniciar Sesión </h4> */}
                      <form autoComplete="on" onSubmit={handle}>
                        <div className="form mb-4">
                          <label className="form-label">
                            Correo Electronico
                          </label>
                          <input
                            type="email"
                            onChange={handleInputChange}
                            name="correo"
                            id="form-label"
                            className="form-control p-3 "
                            placeholder="Ingrese correo electrónico"
                          />
                        </div>

                        <div className="form- mb-2">
                          <label className="form-label">Contraseña</label>
                          <input
                            type="password"
                            onChange={handleInputChange}
                            name="contrasena"
                            id="contrasena"
                            className="form-control p-3"
                            placeholder="Ingrese la contraseña"
                          />
                        </div>

                        <div className="d-grid gap-2 col-12 mx-auto text-center pt-1 mb-5 pb-1 mt-4">
                          <button
                            type="submit"
                            className="btn text-white gradient-custom-button  w-100 fs- pb-2"
                            onClick={() => authUsuarios(data, navigate)}
                          >
                            Iniciar sesión
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6   contan1">
                    <picture className="d-flex align-items-end justify-content-end mt-4">
                      <img src={login} width={"95%"} alt="" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
    </>
  );
}

export default Login;
