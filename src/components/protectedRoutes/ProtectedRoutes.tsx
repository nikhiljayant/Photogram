import { Navigate, Outlet, useLocation } from "react-router-dom";

import { routes } from "../../routes";

import { getAuth } from "firebase/auth";

// Dependency to avoid going back to the login when page is refreshed
import { useAuthState } from "react-firebase-hooks/auth";

import Layout from "../layout/Layout";

const ProtectedRoutes = () => {
  const auth = getAuth();

  const [user, loading] = useAuthState(auth);

  const location = useLocation();

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return user ? (
    <Layout>
      <Outlet />
    </Layout> // Render child routes if user is authenticated
  ) : (
    <Navigate to={routes.login} state={{ from: location }} /> // Redirect to login if not authenticated
  );
};

export default ProtectedRoutes;
