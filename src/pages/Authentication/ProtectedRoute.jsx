import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const ProtectedRoute = () => {
  //Check that u logged to the firebase, if not, just back to page login
  const { user } = UserAuth();

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
