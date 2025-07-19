import { Navigate, Outlet, useLocation } from "react-router-dom";

import { routes } from "../../routes";

import { useUserAuth } from "@/context/userAuthContext";

const ProtectedRoutes = () => {
  const { user } = useUserAuth();

  const location = useLocation();

  return user ? (
    <Outlet /> // Render child routes if user is authenticated
  ) : (
    <Navigate to={routes.login} state={{ from: location }} /> // Redirect to login if not authenticated
  );
};

export default ProtectedRoutes;
