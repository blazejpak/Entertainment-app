import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  const location = useLocation();
  const hideBar =
    location.pathname === "/" || location.pathname === "/signup" ? (
      ""
    ) : (
      <Navbar />
    );

  return (
    <div>
      {hideBar}
      <Outlet />
    </div>
  );
};

export default Root;
