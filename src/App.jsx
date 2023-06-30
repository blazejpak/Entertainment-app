import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";
import ErrorPage from "./pages/ErrorPage";

import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./pages/Authentication/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Login />} errorElement={<ErrorPage />} />
      <Route path="/signup" element={<SignUp />} errorElement={<ErrorPage />} />
      <Route errorElement={<ErrorPage />} element={<ProtectedRoute />}>
        <Route
          path="/home"
          element={<HomePage />}
          errorElement={<ErrorPage />}
        />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
