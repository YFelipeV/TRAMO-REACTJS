import { Outlet, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import PrivateRoute from "./PrivateRoute";
import Header from "../Pages/LandingPage/Header";
import Manifiesto from "../Components/Dashboard/Historial/Manifiesto";

const Home = lazy(() => import("../Pages/LandingPage/Home"));
const About = lazy(() => import("../Pages/LandingPage/About"));
const Contact = lazy(() => import("../Pages/LandingPage/Contact"));
const Login = lazy(() => import("../Pages/Login"));
const Pagina404 = lazy(() => import("../Pages/Pagina404"));

const Navbar = lazy(() => import("../Pages/Dashboard/Navegacion/Navbar"));
const Conductores = lazy(() =>
  import("../Pages/Dashboard/Conductores/ConductoresDisponibles")
);
const Historial = lazy(() => import("../Pages/Dashboard/Historial/Historial"));
const Pqrs = lazy(() => import("../Pages/Dashboard/Pqrs/Pqrs"));
const DatosCliente = lazy(() =>
  import("../Pages/Dashboard/DatosCliente/DatosCliente")
);
const DatosEmpresa = lazy(() =>
  import("../Pages/Dashboard/DatosCliente/DatosEmpresa")
);
const DatosConductores = lazy(() =>
  import("../Pages/Dashboard/DatosConductor/DatosConductores")
);
const Solicitudes = lazy(() =>
  import("../Pages/Dashboard/Solicitudes/Solicitudes")
);

/* Loader */







export const AppRouter = () => {

 

 
  return (
    <>
      {/* LANDING*/}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactos" element={<Contact />} />
        </Route>
        {/* RUTAS SOLAS */}
        <Route
          path="/login"
          element={
            <Suspense
              fallback={
                <section>
                    <div class="container-loaders">
                      <span class="loader1"></span>
                      <div class="loader-title">
                        <span class="loader2">T R A M &nbsp; </span>
                      </div>
                      <span class="slogan">Transporte & Movilidad</span>
                    </div>
                </section>
              }
            >
              {" "}
              <Outlet />
            </Suspense>
          }
        >
          <Route index element={<Login />} />
        </Route>
        <Route path="/pagina404" element={<Pagina404 />} />
        <Route path="*" element={<Pagina404 />} />
        RUTAS DEL DASHBOARD
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Navbar />}>
            <Route index element={<Conductores />} />
            {/* felipe dulcey */}
            <Route path="solicitudes" element={<Solicitudes />} />
            {/* felipe segura */}
            <Route path="datosconductores" element={<DatosConductores />} />
            <Route path="datoscliente" element={<DatosCliente />} />
            <Route path="datosclienteempresa" element={<DatosEmpresa />} />
            {/* felipe dulcey */}
            <Route path="historial" element={<Historial />} />

            {/* felipe segura */}
            <Route path="pqrs" element={<Pqrs />} />
          </Route>
        </Route>
        <Route path="/manifiesto/:id" element={<Manifiesto />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
