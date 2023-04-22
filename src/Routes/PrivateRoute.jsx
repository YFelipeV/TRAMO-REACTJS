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
    </Suspense>
  );
}

export default PrivateRoute;
