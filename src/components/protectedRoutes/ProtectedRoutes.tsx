import { Navigate, Outlet, useLocation } from "react-router-dom";

import { routes } from "../../routes";

const ProtectedRoutes = () => {
  const isAuthenticated: boolean = false; // Replace with actual authentication logic
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={routes.login} state={{ from: location }} />
  );
};

export default ProtectedRoutes;
