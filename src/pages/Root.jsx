import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "../components/Navbar";

import { Dna } from "react-loader-spinner";

const Root = () => {
  //on Login and SignIn don't show navbar
  const location = useLocation();
  const showBar = location.pathname !== "/" && location.pathname !== "/signup";

  return (
    <div className={`flex w-full flex-col ${showBar ? "lg:flex-row" : ""} `}>
      {showBar && <Navbar />}
      <Suspense
        fallback={
          <div className="mx-auto self-center">
            <Dna
              visible={true}
              height="240"
              width="240"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Root;
