import { createBrowserRouter } from "react-router-dom";

import Home from "./components/pages/home/Home";
import Error from "./components/pages/error/Error";
import Post from "./components/pages/post/Post";
import Login from "./components/pages/auth/Login";
import Signup from "./components/pages/auth/Signup";
import Profile from "./components/pages/profile/Profile";
import MyPhotos from "./components/pages/myphotos/MyPhotos";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";

export const routes = {
  home: "/home",
  post: "/post",
  login: "/login",
  signup: "/signup",
  profile: "/profile",
  myPhotos: "/my-photos",
};

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />, // Wrap all routes with ProtectedRoutes
    children: [
      {
        path: routes.home,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: routes.post,
        element: <Post />,
        errorElement: <Error />,
      },
      {
        path: routes.profile,
        element: <Profile />,
        errorElement: <Error />,
      },
      {
        path: routes.myPhotos,
        element: <MyPhotos />,
        errorElement: <Error />,
      },
    ],
  },
  // Public routes 👇
  {
    path: routes.login,
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: routes.signup,
    element: <Signup />,
    errorElement: <Error />,
  },
]);
