import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
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
    <div>
      <p>Navbar:{user && user.email}</p>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Navbar;
