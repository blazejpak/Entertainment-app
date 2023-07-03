import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

import { ReactComponent as HomeIcon } from "../assets/icon-nav-home.svg";
import { ReactComponent as MovieIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as SeriesIcon } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkIcon } from "../assets/icon-nav-bookmark.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

import { SlLogout } from "react-icons/sl";

import ProfileImg from "../assets/image-avatar.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();

  const [activeLink, setActiveLink] = useState(location.pathname);
  console.log(activeLink);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="flex h-14  items-center justify-between bg-[#161D2F] px-4 md:mx-6 md:mt-5 md:h-[72px]   md:rounded lg:mx-0 lg:ml-8 lg:h-[90vh]  lg:flex-col lg:rounded-3xl lg:px-8 lg:py-9">
      <Logo />
      <nav className="flex gap-6 text-[#5A698F] lg:flex-col">
        <Link to="/home" onClick={() => setActiveLink("home")}>
          <HomeIcon
            className={`${
              activeLink === "/home" ? "text-white" : "hover:text-[#FC4747]"
            } scale-[.8] cursor-pointer   md:scale-100`}
          />
        </Link>

        <Link to="/movies" onClick={() => setActiveLink("movies")}>
          <MovieIcon
            className={`${
              activeLink === "/movies" ? "text-white" : "hover:text-[#FC4747]"
            } scale-[.8] cursor-pointer   md:scale-100`}
          />
        </Link>

        <Link to="/series" onClick={() => setActiveLink("series")}>
          <SeriesIcon
            className={`${
              activeLink === "/series" ? "text-white" : "hover:text-[#FC4747]"
            } scale-[.8] cursor-pointer   md:scale-100`}
          />
        </Link>

        <Link to="/bookmark" onClick={() => setActiveLink("bookmark")}>
          <BookmarkIcon
            className={`${
              activeLink === "/bookmark" ? "text-white" : "hover:text-[#FC4747]"
            } scale-[.8] cursor-pointer   md:scale-100`}
          />
        </Link>
      </nav>
      <div className="relative mr-2 flex items-center gap-8 lg:h-10 lg:w-10 lg:flex-col">
        <img
          src={ProfileImg}
          className="h-6 w-6 md:h-8 md:w-8   lg:h-10 lg:w-10"
        />
        <div className="cursor-pointer " onClick={logoutHandler}>
          <SlLogout className="h-[24px] w-[24px] md:h-[32px] md:w-[32px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
