import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  //on Login and SignIn don't show navbar
  const location = useLocation();
  const hideBar =
    location.pathname === "/" || location.pathname === "/signup" ? (
      ""
    ) : (
      <Navbar />
    );

  return (
    <div className="flex w-full flex-col lg:flex-row ">
      {hideBar}
      <Outlet />
    </div>
  );
};

export default Root;
