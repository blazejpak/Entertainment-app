import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  //on Login and SignIn don't show navbar
  const location = useLocation();
  const showBar = location.pathname !== "/" && location.pathname !== "/signup";

  return (
    <div className={`flex w-full flex-col ${showBar ? "lg:flex-row" : ""} `}>
      {showBar && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Root;
