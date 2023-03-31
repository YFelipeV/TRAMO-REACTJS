import { Route, Routes } from "react-router-dom";
import { Home, About, Contact } from "../Components/LandingPage";
import { lazy, Suspense } from "react";
const Head = lazy(() => import("../Components/LandingPage/Header"));
import Pagina404 from "../Pages/Pagina404";
import Login from "../Pages/Login";
import Navbar  from "../Pages/Dashboard/Navegacion/Navbar";
export const AppRouter = () => {
  return (
    <>
      {/* LANIDNG*/}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="d-flex justify-content-center">
                  <h4 className="text-white">Cargando...</h4>
                </div>
              }
            >
              <Head />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactos" element={<Contact />} />
        </Route>



        {/* RUTAS SOLAS */}
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Pagina404 />} />

        {/* RUTAS DEL DASHBOARD */}
        <Route path="/dashboard" element={<Navbar/>}>
        <Route index element={<Home />} />
        {/* felipe dulcey */}
        <Route path="solicitudes" element={<Home />} />
         {/* felipe segura */}
        <Route path="datosconductores" element={<Home />} />
        <Route path="datoscliente" element={<Home />} />
           {/* felipe dulcey */}
        <Route path="historial" element={<Home />} />
         {/* felipe segura */}
        <Route path="pqrs" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
