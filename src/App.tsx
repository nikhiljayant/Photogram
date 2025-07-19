import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

import { UserAuthProvider } from "@/context/userAuthContext";

const App = () => {
  return (
    <UserAuthProvider>
      <RouterProvider router={router} />
    </UserAuthProvider>
  );
};

export default App;
