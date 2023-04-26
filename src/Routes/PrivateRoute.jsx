import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={"/pagina404"} />;
  }
  return (
    <Suspense
      fallback={
        <section >
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
      <Outlet />
    </Suspense>
  );
}

export default PrivateRoute;
